import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Function to instantiate Gemini client with optional custom user API Key
function getGeminiClient(customKey?: string): GoogleGenAI {
  const apiKey = customKey?.trim() || process.env.GEMINI_API_KEY || '';
  if (!apiKey) {
    throw new Error('Chưa cấu hình Gemini API Key. Vui lòng kiểm tra lại Key hoặc nhập Gemini API Key cá nhân.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Helper to retry Gemini calls if transient network drops occur
async function callGeminiWithRetry<T>(fn: () => Promise<T>, retries = 2, delayMs = 1000): Promise<T> {
  let lastErr: any;
  for (let i = 0; i <= retries; i++) {
    try {
      if (i > 0) {
        console.log(`Retrying Gemini API call (attempt ${i + 1}/${retries + 1})...`);
        await new Promise((r) => setTimeout(r, delayMs * i));
      }
      return await fn();
    } catch (err: any) {
      console.warn(`Gemini API call attempt ${i + 1} failed:`, err?.message || String(err));
      lastErr = err;
    }
  }
  throw lastErr;
}

// System prompt for IELTS Speaking Coach
const SYSTEM_PROMPT = `
Bạn là một giáo viên IELTS Speaking bản ngữ chuyên nghiệp, có kinh nghiệm luyện thi cho học viên Việt Nam nâng band điểm từ 5.5 lên 7.0 - 8.0+.

ĐẶC BIỆT CHÚ Ý VỀ TÍNH CHẤT VĂN NÓI (SPOKEN ENGLISH) & NGUYÊN TẮC ĐỒNG BỘ TỪ VỰNG:

1. CHUẨN VĂN NÓI GIAO TIẾP (SPOKEN ENGLISH):
- IELTS Speaking là bài thi NÓI GIAO TIẾP. Bài trả lời mẫu (sampleAnswer) phải chuẩn VĂN NÓI TỰ NHIÊN, KHÔNG ĐƯỢC VIẾT NHƯ BÀI LUẬN WRITING TASK 2.
- KHÔNG DÙNG TỪ NỐI VĂN VIẾT CỨNG NHẮC như: "On the one hand... On the other hand", "Furthermore", "In conclusion", "Ultimately, while...", "Acts as a double-edged sword", "It can be observed that".
- BẮT BUỘC DÙNG TỪ NỐI & FILLERS VĂN NÓI TỰ NHIÊN CỦA NGƯỜI BẢN XỨ như: "Well, to be honest...", "I mean...", "You know...", "Like...", "Actually...", "To put it simply...", "I'd say...", "Truth be told...", "When you think about it...", "Come to think of it...", "In fact...", "Mind you...".

2. TỪ VỰNG TỰ NHIÊN (SPOKEN COLLOCATIONS & PHRASAL VERBS):
- Tuyệt đối TRÁNH các từ vựng văn viết acadmic hay từ hiếm gượng ép (như "detrimental", "paramount", "self-contained sanctuaries", "inadvertently").
- ƯU TIÊN Phrasal verbs, Spoken Collocations & Idioms thông dụng người bản xứ nói hàng ngày (ví dụ: "catch up with each other", "get along well", "have a chat over dinner", "keep to themselves", "unwind after a long day", "make time for", "feel at ease").

3. QUY TẮC ĐỒNG BỘ & LẮP RÁP TỪ VỰNG (CRITICAL - CLONE VOCABULARY ACROSS SECTIONS):
- Mục \`vocabulary\` (5-6 cụm) BẮT BUỘC phải là TẬP HỢP TỪ VỰNG CỐT LÕI duy nhất của bài học.
- TRONG MỤC Ý TƯỞNG (\`ideas\`): Khi mô tả ý tưởng bằng tiếng Việt, hãy lồng ghép trực tiếp các cụm tiếng Anh trong mục \`vocabulary\` (hoặc mở ngoặc cụm tiếng Anh) để người học thấy ngay cách áp dụng cụm từ đó vào ý tưởng nói.
- TRONG BÀI TRẢ LỜI MẪU (\`sampleAnswer\`): 100% TẤT CẢ các cụm từ trong mục \`vocabulary\` BẮT BUỘC phải xuất hiện và được làm nổi bật/sử dụng mượt mà tự nhiên trong bài nói mẫu.
- Mục đích: Người học chỉ cần học 1 bộ 5-6 cụm từ cốt lõi này và thấy nó lặp đi lặp lại từ Ý tưởng -> Từ vựng -> Bài nói mẫu để ghi nhớ sâu mà không bị ngợp bởi từ mới rải rác.

NHIỆM VỤ CỦA BẠN:
Khi người học cung cấp một câu hỏi hoặc chủ đề IELTS Speaking:
1. Xác định chính xác Part (Part 1, Part 2, hoặc Part 3) và Dạng câu hỏi cụ thể.
2. Đưa ra Chiến lược & Cấu trúc trả lời (3-5 câu cho Part 1/3, khung 4 đoạn ngắn cho Part 2).
3. Đưa ra 2-3 Hướng ý tưởng triển khai ngắn gọn bằng tiếng Việt, LỒNG GHÉP TRỰC TIẾP các cụm từ vựng tiếng Anh cốt lõi từ danh sách vocabulary.
4. Cung cấp 5-6 Cụm từ vựng & Collocations / Phrasal Verbs cốt lõi Band 7.0+ (chuẩn văn nói giao tiếp, tự nhiên, có nghĩa tiếng Việt và 1 câu ví dụ minh họa).
5. Đưa ra CÂU TRẢ LỜI MẪU HOÀN CHỈNH (Band 7.5 - 8.0 chuẩn văn nói giao tiếp, tự nhiên, mượt mà, chứa ĐẦY ĐỦ các cụm từ ở mục vocabulary và dùng fillers tự nhiên).
6. Nêu các LỖI THƯỜNG GẶP CỦA NGƯỜI VIỆT khi trả lời dạng câu hỏi này (đặc biệt lỗi dùng văn viết để nói, gượng ép nhét từ khó).
7. Đưa ra 2 câu hỏi mở rộng / follow-up để người học tự luyện phản xạ.

LƯU Ý QUY ĐỊNH ĐỊNH DẠNG:
- Phần giải thích, chiến lược, ý tưởng, nghĩa từ vựng, lỗi thường gặp viết bằng TIẾNG VIỆT dễ hiểu, khích lệ.
- Phần từ vựng, câu ví dụ, câu trả lời mẫu, câu hỏi follow-up viết bằng TIẾNG ANH văn nói tự nhiên.
- Trả lời nguyên bản định dạng JSON chuẩn.
`;

// Schema for Coach Response JSON
const COACH_RESPONSE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    part: { type: Type.STRING, description: 'Part 1, Part 2, or Part 3' },
    questionType: { type: Type.STRING, description: 'Tên dạng câu hỏi bằng tiếng Việt (ví dụ: Yes/No mở rộng, Nguyên nhân, So sánh...)' },
    questionStrategy: { type: Type.STRING, description: 'Tóm tắt chiến lược trả lời ngắn gọn trong 1-2 câu' },
    structureOutline: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: 'Các bước triển khai câu trả lời'
    },
    ideas: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: '2-3 hướng ý tưởng triển khai bằng tiếng Việt có lồng ghép trực tiếp các cụm từ vựng tiếng Anh ở mục vocabulary'
    },
    vocabulary: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          term: { type: Type.STRING, description: 'Cụm từ / Spoken Collocation / Phrasal Verb giao tiếp tự nhiên' },
          type: { type: Type.STRING, description: 'Collocation, Phrasal verb, Idiom...' },
          definition: { type: Type.STRING, description: 'Nghĩa tiếng Việt ngắn gọn' },
          pronunciation: { type: Type.STRING, description: 'Chú ý phát âm IPA hoặc giọng nói' },
          example: { type: Type.STRING, description: 'Câu ví dụ giao tiếp tự nhiên áp dụng trực tiếp cụm từ' }
        },
        required: ['term', 'type', 'definition', 'example']
      },
      description: '5-6 cụm collocations/phrasal verbs cốt lõi Band 7.0+ giao tiếp tự nhiên'
    },
    sampleAnswer: { type: Type.STRING, description: 'Bài trả lời mẫu Band 7.5+ chuẩn văn nói giao tiếp tự nhiên, chứa đầy đủ các cụm từ vựng ở mục vocabulary' },
    commonMistakes: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: 'Lỗi người Việt hay mắc phải ở dạng câu hỏi này'
    },
    followUpQuestions: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: '2 câu hỏi mở rộng luyện phản xạ'
    }
  },
  required: ['part', 'questionType', 'questionStrategy', 'structureOutline', 'ideas', 'vocabulary', 'sampleAnswer', 'commonMistakes']
};

// API Endpoint: Coach Analysis & Sample Generation
app.post('/api/speaking-coach', async (req, res) => {
  try {
    const { question, part = 'auto', questionTypeId, customContext } = req.body;
    const customApiKey = (req.headers['x-gemini-api-key'] as string) || req.body?.customApiKey;

    if (!question || typeof question !== 'string' || !question.trim()) {
      return res.status(400).json({ error: 'Question is required' });
    }

    const ai = getGeminiClient(customApiKey);

    let userPrompt = `Câu hỏi / Chủ đề IELTS Speaking cần phân tích: "${question.trim()}"\n`;
    if (part && part !== 'auto') {
      userPrompt += `Part yêu cầu: ${part.toUpperCase()}\n`;
    }
    if (questionTypeId) {
      userPrompt += `Dạng câu hỏi gợi ý: ${questionTypeId}\n`;
    }
    if (customContext) {
      userPrompt += `Bối cảnh / Yêu cầu thêm từ người học: ${customContext}\n`;
    }

    const response = await callGeminiWithRetry(() =>
      ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: userPrompt,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          responseMimeType: 'application/json',
          responseSchema: COACH_RESPONSE_SCHEMA,
          temperature: 0.7,
        }
      })
    );

    const jsonText = response.text || '{}';
    const resultData = JSON.parse(jsonText);

    res.json({ success: true, data: resultData });
  } catch (error: any) {
    console.error('Error generating speaking coach response:', error);
    res.status(500).json({
      error: 'Failed to generate IELTS Speaking guidance.',
      details: error?.message || String(error)
    });
  }
});

// Evaluation Schema
const EVALUATION_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    overallBand: { type: Type.NUMBER, description: 'Overall IELTS Speaking Band score (e.g. 6.5, 7.0, 7.5)' },
    fluencyAndCoherence: {
      type: Type.OBJECT,
      properties: {
        score: { type: Type.NUMBER },
        feedback: { type: Type.STRING, description: 'Đánh giá độ trôi chảy, mạch lạc, từ nối bằng Tiếng Việt' }
      },
      required: ['score', 'feedback']
    },
    lexicalResource: {
      type: Type.OBJECT,
      properties: {
        score: { type: Type.NUMBER },
        feedback: { type: Type.STRING, description: 'Đánh giá vốn từ vựng, collocations bằng Tiếng Việt' }
      },
      required: ['score', 'feedback']
    },
    grammaticalRange: {
      type: Type.OBJECT,
      properties: {
        score: { type: Type.NUMBER },
        feedback: { type: Type.STRING, description: 'Đánh giá độ đa dạng & chính xác ngữ pháp bằng Tiếng Việt' }
      },
      required: ['score', 'feedback']
    },
    pronunciation: {
      type: Type.OBJECT,
      properties: {
        score: { type: Type.NUMBER },
        feedback: { type: Type.STRING, description: 'Đánh giá phát âm, trọng âm, intonation bằng Tiếng Việt' }
      },
      required: ['score', 'feedback']
    },
    improvedAnswer: { type: Type.STRING, description: 'Bài trả lời được nâng cấp lên Band 7.5+ dựa trên ý của người học' },
    keyImprovements: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: '3-4 điểm cải thiện cốt lõi cần chú ý'
    },
    suggestedCollocations: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: 'Các collocations Band 7.0+ nên bổ sung'
    }
  },
  required: ['overallBand', 'fluencyAndCoherence', 'lexicalResource', 'grammaticalRange', 'pronunciation', 'improvedAnswer', 'keyImprovements', 'suggestedCollocations']
};

// API Endpoint: Evaluate User's Answer
app.post('/api/evaluate-answer', async (req, res) => {
  try {
    const { question, userAnswer, part = 'Part 1' } = req.body;
    const customApiKey = (req.headers['x-gemini-api-key'] as string) || req.body?.customApiKey;

    if (!question || !userAnswer) {
      return res.status(400).json({ error: 'Question and User Answer are required' });
    }

    const ai = getGeminiClient(customApiKey);

    const prompt = `
Bạn là Giám khảo IELTS Speaking bản ngữ. Hãy chấm điểm bài trả lời dưới đây của thí sinh Việt Nam theo 4 tiêu chí chuẩn IELTS Speaking Band descriptors.

Mức Part: ${part}
Câu hỏi: "${question}"
Bài làm của thí sinh: "${userAnswer}"

Yêu cầu:
1. Đánh giá chi tiết 4 tiêu chí: Fluency & Coherence, Lexical Resource, Grammatical Range & Accuracy, Pronunciation.
2. Cho điểm từng phần (thang điểm 0.5 từ 4.0 - 9.0) và Overall Band.
3. Chỉ ra lỗi sai cụ thể (từ vựng, ngữ pháp, tư duy dịch thẳng) kèm cách sửa.
4. Viết lại bài làm của học viên thành bài mẫu Band 7.5+ CHUẨN VĂN NÓI GIAO TIẾP (Spoken English) tự nhiên, có từ nối/fillers văn nói tự nhiên (well, to be honest, I mean, actually, you know...), NGHIÊM CẤM dùng văn viết essay cứng nhắc (như On the one hand, Furthermore...), giữ trọn vẹn ý chính của học viên nhưng nâng cấp collocations và phrasal verbs nói tự nhiên.
5. Giải thích nhận xét bằng TIẾNG VIỆT gần gũi, mang tính xây dựng.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: EVALUATION_SCHEMA,
        temperature: 0.5,
      }
    });

    const resultData = JSON.parse(response.text || '{}');
    res.json({ success: true, data: resultData });
  } catch (error: any) {
    console.error('Error evaluating answer:', error);
    res.status(500).json({
      error: 'Failed to evaluate speaking answer.',
      details: error?.message || String(error)
    });
  }
});

// API Endpoint: Generate Custom Topic Questions
app.post('/api/generate-questions', async (req, res) => {
  try {
    const { topic } = req.body;
    const customApiKey = (req.headers['x-gemini-api-key'] as string) || req.body?.customApiKey;

    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    const ai = getGeminiClient(customApiKey);

    const prompt = `Tạo 3 câu hỏi IELTS Speaking xoay quanh chủ đề "${topic}":
1 câu Part 1 (câu hỏi cá nhân quen thuộc)
1 đề Part 2 (Cue Card kèm 4 gạch đầu dòng)
1 câu Part 3 (câu hỏi thảo luận xã hội trừu tượng)

Trả về JSON gồm 3 trường: part1Question, part2CueCard (object: title, bulletPoints: string[]), part3Question.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            part1Question: { type: Type.STRING },
            part2CueCard: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                bulletPoints: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ['title', 'bulletPoints']
            },
            part3Question: { type: Type.STRING }
          },
          required: ['part1Question', 'part2CueCard', 'part3Question']
        },
        temperature: 0.7
      }
    });

    const data = JSON.parse(response.text || '{}');
    res.json({ success: true, data });
  } catch (error: any) {
    console.error('Error generating questions:', error);
    res.status(500).json({ error: 'Failed to generate questions' });
  }
});

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Global Express Error Handler - Always return JSON for API routes
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Express Unhandled Error:', err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Lỗi xử lý hệ thống nội bộ.',
    details: process.env.NODE_ENV !== 'production' ? String(err) : undefined
  });
});

// Start Server with Vite Middleware in Dev
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
  server.keepAliveTimeout = 65000;
  server.headersTimeout = 66000;
}

startServer();
