import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CoachResponse } from '../types';

export async function exportLessonToPDF(data: CoachResponse, question: string) {
  // Create hidden DOM container for rendering full Vietnamese HTML export
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '0';
  container.style.width = '800px'; // Standard A4 ratio
  container.style.backgroundColor = '#ffffff';
  container.style.color = '#0f172a';
  container.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
  container.style.padding = '36px';
  container.style.boxSizing = 'border-box';

  // Vocabulary Items HTML
  const vocabularyHtml = (data.vocabulary || []).map((item, idx) => `
    <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; padding: 12px 14px; margin-bottom: 10px; page-break-inside: avoid;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
        <span style="font-weight: 700; font-size: 15px; color: #0d9488;">${idx + 1}. ${item.term}</span>
        <span style="font-size: 11.5px; background-color: #e2e8f0; color: #334155; padding: 2px 8px; border-radius: 6px; font-weight: 600;">${item.type}</span>
      </div>
      <div style="font-weight: 700; font-size: 14px; color: #b45309; margin-bottom: 4px;">
        Nghĩa: ${item.definition} <span style="font-weight: 400; font-size: 12px; color: #64748b;">(${item.pronunciation})</span>
      </div>
      <div style="font-style: italic; font-size: 13.5px; color: #334155; background-color: #ffffff; padding: 8px 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
        Ex: "${item.example}"
      </div>
    </div>
  `).join('');

  // Structure steps HTML
  const structureHtml = (data.structureOutline || []).map((step, idx) => `
    <div style="display: flex; gap: 12px; margin-bottom: 8px; align-items: flex-start;">
      <span style="background-color: #4f46e5; color: #ffffff; font-weight: 700; font-size: 12.5px; padding: 3px 8px; border-radius: 6px; flex-shrink: 0; margin-top: 2px;">
        Bước ${idx + 1}
      </span>
      <span style="font-size: 14.5px; color: #1e293b; line-height: 1.5;">${step}</span>
    </div>
  `).join('');

  // Ideas HTML
  const ideasHtml = (data.ideas && data.ideas.length > 0) ? `
    <div style="margin-top: 20px; margin-bottom: 20px;">
      <h3 style="font-size: 16px; font-weight: 700; color: #4f46e5; margin-bottom: 10px; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px;">
        3. GỢI Ý HƯỚNG Ý TƯỞNG (Ideas & Talking Points)
      </h3>
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px;">
        ${data.ideas.map(idea => `
          <div style="font-size: 14.5px; color: #334155; margin-bottom: 8px; line-height: 1.5; padding-left: 8px; border-left: 3px solid #818cf8;">
            • ${idea}
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // Mistakes HTML
  const mistakesHtml = (data.commonMistakes && data.commonMistakes.length > 0) ? `
    <div style="margin-top: 20px; margin-bottom: 20px;">
      <h3 style="font-size: 16px; font-weight: 700; color: #e11d48; margin-bottom: 10px; border-bottom: 2px solid #ffe4e6; padding-bottom: 6px;">
        6. LỖI THƯỜNG GẶP CẦN TRÁNH (Common Mistakes)
      </h3>
      ${data.commonMistakes.map(m => `
        <div style="font-size: 14px; color: #9f1239; margin-bottom: 6px; line-height: 1.5; background-color: #fff1f2; padding: 8px 12px; border-radius: 8px; border: 1px solid #fecdd3;">
          ⚠️ ${m}
        </div>
      `).join('')}
    </div>
  ` : '';

  // Follow up HTML
  const followUpHtml = (data.followUpQuestions && data.followUpQuestions.length > 0) ? `
    <div style="margin-top: 20px; margin-bottom: 20px;">
      <h3 style="font-size: 16px; font-weight: 700; color: #4f46e5; margin-bottom: 10px; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px;">
        7. CÂU HỎI MỞ RỘNG LUYỆN TẬP (Follow-up Questions)
      </h3>
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px;">
        ${data.followUpQuestions.map(q => `
          <div style="font-size: 14.5px; color: #334155; margin-bottom: 6px; line-height: 1.5;">
            • "${q}"
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  container.innerHTML = `
    <!-- Top Branding -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #4f46e5; padding-bottom: 10px; margin-bottom: 20px;">
      <div>
        <span style="font-weight: 800; font-size: 17px; color: #4f46e5;">IELTS SPEAKING COACH</span>
        <span style="font-size: 13.5px; color: #64748b; margin-left: 8px; font-weight: 500;">| Kế Hoạch Bài Học & Từ Vựng Band 7.0+</span>
      </div>
      <span style="font-size: 12px; font-weight: 700; color: #059669; background-color: #d1fae5; border: 1px solid #a7f3d0; padding: 4px 12px; border-radius: 20px;">
        Mục tiêu Band 7.0+
      </span>
    </div>

    <!-- Title Banner -->
    <div style="background-color: #1e293b; color: #ffffff; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
      <h1 style="font-size: 20px; font-weight: 800; margin: 0 0 6px 0; color: #ffffff; letter-spacing: 0.3px;">
        KẾ HOẠCH BÀI HỌC SPEAKING - BAND 7.0
      </h1>
      <div style="font-size: 14px; color: #cbd5e1; font-weight: 500;">
        ${data.part.toUpperCase()} | Dạng câu hỏi: ${data.questionType}
      </div>
    </div>

    <!-- Target Question -->
    <div style="background-color: #f1f5f9; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
      <div style="font-size: 12.5px; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
        CÂU HỎI THỰC HÀNH (TARGET QUESTION):
      </div>
      <div style="font-size: 15.5px; font-weight: 700; color: #0f172a; line-height: 1.5; white-space: pre-wrap;">
        "${question}"
      </div>
    </div>

    <!-- Core Strategy -->
    <div style="margin-bottom: 24px;">
      <h2 style="font-size: 16px; font-weight: 700; color: #4f46e5; margin-bottom: 10px; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px;">
        1. CHIẾN LƯỢC TRẢ LỜI CỐT LÕI (Core Answer Strategy)
      </h2>
      <div style="font-size: 14.5px; color: #334155; line-height: 1.6; background-color: #faf5ff; border: 1px solid #e9d5ff; padding: 14px 16px; border-radius: 10px;">
        ${data.questionStrategy}
      </div>
    </div>

    <!-- Structure Outline -->
    <div style="margin-bottom: 24px;">
      <h2 style="font-size: 16px; font-weight: 700; color: #4f46e5; margin-bottom: 12px; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px;">
        2. CẤU TRÚC TRIỂN KHAI Ý (Response Structure Outline)
      </h2>
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 16px;">
        ${structureHtml}
      </div>
    </div>

    <!-- Ideas -->
    ${ideasHtml}

    <!-- Target Vocabulary -->
    ${data.vocabulary && data.vocabulary.length > 0 ? `
      <div style="margin-top: 24px; margin-bottom: 24px;">
        <h2 style="font-size: 16px; font-weight: 700; color: #059669; margin-bottom: 12px; border-bottom: 2px solid #a7f3d0; padding-bottom: 6px;">
          4. BỘ TỪ VỰNG & COLLOCATIONS BAND 7.0+ (${data.vocabulary.length} cụm từ)
        </h2>
        ${vocabularyHtml}
      </div>
    ` : ''}

    <!-- Sample Answer -->
    <div style="margin-bottom: 24px;">
      <h2 style="font-size: 16px; font-weight: 700; color: #4f46e5; margin-bottom: 12px; border-bottom: 2px solid #e0e7ff; padding-bottom: 6px;">
        5. CÂU TRẢ LỜI MẪU BAND 7.0+ (Model Sample Answer)
      </h2>
      <div style="font-size: 14.5px; color: #1e1b4b; line-height: 1.7; background-color: #f0f3ff; border: 1px solid #c7d2fe; padding: 16px 18px; border-radius: 12px; white-space: pre-wrap;">
        ${data.sampleAnswer}
      </div>
    </div>

    <!-- Common Mistakes -->
    ${mistakesHtml}

    <!-- Follow Up -->
    ${followUpHtml}

    <!-- Footer -->
    <div style="margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 12px; text-align: center; font-size: 12px; color: #94a3b8;">
      IELTS Speaking Coach • Tài liệu được tạo tự động cho luyện tập Band 7.0+
    </div>
  `;

  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfPageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfPageHeight;

    while (heightLeft > 0) {
      position -= pdfPageHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfPageHeight;
    }

    const fileName = `IELTS_Speaking_${(data.part || 'Lesson').replace(/\s+/g, '_')}_Plan.pdf`;
    pdf.save(fileName);
  } finally {
    document.body.removeChild(container);
  }
}
