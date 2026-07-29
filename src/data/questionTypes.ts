import { QuestionTypeOption } from '../types';

export const QUESTION_TYPES: QuestionTypeOption[] = [
  // PART 1
  {
    id: 'yes_no_expand',
    part: 'part1',
    label: 'Yes/No mở rộng',
    labelVi: 'Trả lời thẳng Yes/No → Lý do → Ví dụ cụ thể',
    example: 'Do you like reading books?',
    strategy: 'Khẳng định trực tiếp câu trả lời (Yes/No/It depends), giải thích 1-2 lý do cốt lõi và minh họa bằng ví dụ thực tế hoặc thói quen cá nhân.'
  },
  {
    id: 'frequency',
    part: 'part1',
    label: 'Tần suất (How often...)',
    labelVi: 'Dùng trạng từ tần suất tự nhiên → Lý do / Bối cảnh',
    example: 'How often do you cook?',
    strategy: 'Tránh dùng cụm từ đơn điệu như "every day". Hãy dùng "on a daily basis", "once in a blue moon", "every now and then" kết hợp giải thích nguyên do.'
  },
  {
    id: 'habit',
    part: 'part1',
    label: 'Mô tả thói quen',
    labelVi: 'Liệt kê 2 hoạt động + Lý do yêu thích',
    example: 'What do you usually do at weekends?',
    strategy: 'Mô tả 1-2 hoạt động quen thuộc, sử dụng động từ chỉ sở thích tự nhiên và bối cảnh thời gian cụ thể.'
  },
  {
    id: 'past_present',
    part: 'part1',
    label: 'So sánh Quá khứ – Hiện tại',
    labelVi: 'Dùng Quá khứ đơn/Used to → So sánh Hiện tại đơn/Present Perfect',
    example: 'Did you play any sports as a child?',
    strategy: 'Cấu trúc "I used to... but nowadays I tend to...". Nêu sự thay đổi về thời gian, sở thích hoặc điều kiện sống.'
  },
  {
    id: 'preference_reason',
    part: 'part1',
    label: 'Sở thích & Lý do (Why...)',
    labelVi: '1-2 lý do + Collocation cảm xúc',
    example: 'Why do you like your job/major?',
    strategy: 'Bắt đầu với cảm xúc chung, sau đó đưa ra 2 khía cạnh bạn đánh giá cao (môi trường, cơ hội phát triển, cảm giác tự do...).'
  },
  {
    id: 'short_opinion',
    part: 'part1',
    label: 'Ý kiến ngắn (Is it important...)',
    labelVi: 'Quan điểm ngắn gọn + 1 lý do thực tế',
    example: 'Is it important to learn English?',
    strategy: 'Nêu ngay quan điểm (Absolutely / To a certain extent) và đi thẳng vào lợi ích thiết thực nhất.'
  },

  // PART 2
  {
    id: 'cue_card',
    part: 'part2',
    label: 'Cue Card (Mô tả 1-2 phút)',
    labelVi: 'Khung 4 đoạn: Mở bài → Thân bài (4 gợi ý) → Mở rộng → Kết',
    example: 'Describe a memorable journey you went on.',
    strategy: 'Dành 1 phút chuẩn bị dàn ý theo 4 gạch đầu dòng. Dùng linking words tự nhiên ("What really stood out to me was...", "It wasn\'t until... that I realised...") để nói liền mạch 1.5 - 2 phút.'
  },

  // PART 3
  {
    id: 'why_cause',
    part: 'part3',
    label: 'Nguyên nhân (Why...)',
    labelVi: 'Nêu 2 nguyên nhân cốt lõi + Ví dụ xã hội',
    example: 'Why do young people prefer online shopping?',
    strategy: 'Trả lời tầm vóc xã hội ("One primary factor is...", "Another rationale is..."). Tránh lấy bản thân làm ví dụ chính, thay vào đó nói về xu hướng chung.'
  },
  {
    id: 'how_process',
    part: 'part3',
    label: 'Cách thức/Quá trình (How...)',
    labelVi: 'So sánh Trước - Sau & Đánh giá tác động',
    example: 'How has technology changed the way people work?',
    strategy: 'Chỉ ra sự chuyển dịch (shift) từ phương pháp truyền thống sang hiện đại, liên hệ năng suất và sự tiện lợi.'
  },
  {
    id: 'evaluation',
    part: 'part3',
    label: 'Đánh giá / Lợi ích (Is it important...)',
    labelVi: 'Quan điểm rõ ràng + 2 lý do + Phản biện nhẹ (On the other hand...)',
    example: 'Is it important for children to learn a second language?',
    strategy: 'Khẳng định tầm quan trọng, phân tích lợi ích ngắn hạn & dài hạn, thêm một mặt trái nhẹ để bài nói cân bằng.'
  },
  {
    id: 'compare_contrast',
    part: 'part3',
    label: 'So sánh đối lập (X vs Y)',
    labelVi: 'Cân bằng 2 mặt → Nghiêng về 1 phía với lý do thuyết phục',
    example: 'Do you think working from home is better than working in an office?',
    strategy: 'Phân tích điểm mạnh của A, điểm mạnh của B, sau đó kết luận môi trường nào tối ưu hơn tùy vào tính chất công việc.'
  },
  {
    id: 'future_prediction',
    part: 'part3',
    label: 'Dự đoán tương lai (Will... in the future?)',
    labelVi: 'Dự đoán có điều kiện (If-clause) + Modal verbs (might, bound to)',
    example: 'Will paper books disappear in the future?',
    strategy: 'Dùng ngôn ngữ phỏng đoán ("It is highly likely that...", "I doubt whether..."). Nêu kịch bản nếu công nghệ tiếp tục phát triển.'
  },
  {
    id: 'generation_country',
    part: 'part3',
    label: 'So sánh Thế hệ / Quốc gia',
    labelVi: 'Nêu sự khác biệt về tư duy, công nghệ hoặc văn hóa',
    example: 'Is the way people spend free time different from the past?',
    strategy: 'Đối chiếu giữa thế hệ trước (older generation) và thế hệ trẻ (younger generation), nhấn mạnh yếu tố lối sống số và áp lực công việc.'
  },
  {
    id: 'solution',
    part: 'part3',
    label: 'Đề xuất Giải pháp (What can be done...)',
    labelVi: '2 Giải pháp (Chính phủ / Cá nhân) + Tác động kỳ vọng',
    example: 'What can governments do to reduce pollution in cities?',
    strategy: 'Phân chia giải pháp theo quy mô: chính sách vĩ mô (chính phủ) và hành động tự giác (cá nhân/cộng đồng).'
  }
];
