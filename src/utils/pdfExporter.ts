import { jsPDF } from 'jspdf';
import { CoachResponse } from '../types';

/**
 * Normalizes Vietnamese diacritics to clean printable characters for standard PDF fonts
 * to guarantee no character encoding corruption or missing glyphs in jsPDF.
 */
function removeAccents(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

export function exportLessonToPDF(data: CoachResponse, question: string) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Helper to add new page if needed
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
      addPageHeaderFooter();
    }
  };

  const addPageHeaderFooter = () => {
    // Header line
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text('IELTS Speaking Coach • Band 7.0 Strategy & Lesson Plan', margin, 10);
    doc.setDrawColor(220, 220, 220);
    doc.line(margin, 12, pageWidth - margin, 12);
  };

  addPageHeaderFooter();
  y = 18;

  // Document Title Banner
  doc.setFillColor(30, 41, 59); // Dark slate
  doc.rect(margin, y, contentWidth, 22, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text('IELTS SPEAKING COACH - BAND 7.0 LESSON PLAN', margin + 6, y + 9);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(203, 213, 225);
  doc.text(
    `${data.part.toUpperCase()} | Question Type: ${removeAccents(data.questionType)} | Band 7.0 Target`,
    margin + 6,
    y + 16
  );

  y += 28;

  // Target Question Section
  doc.setFillColor(241, 245, 249); // Slate-100
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, y, contentWidth, 18, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text('TARGET QUESTION:', margin + 4, y + 6);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  const cleanQuestion = removeAccents(question);
  const splitQ = doc.splitTextToSize(`"${cleanQuestion}"`, contentWidth - 8);
  doc.text(splitQ, margin + 4, y + 12);

  y += 24;

  // Core Strategy
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(79, 70, 229); // Indigo
  doc.text('1. CORE ANSWER STRATEGY (Chien Luoc Tra Loi)', margin, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const cleanStrategy = removeAccents(data.questionStrategy);
  const splitStrategy = doc.splitTextToSize(cleanStrategy, contentWidth);
  doc.text(splitStrategy, margin, y);
  y += splitStrategy.length * 4.5 + 6;

  // Structure Outline
  checkPageBreak(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(79, 70, 229);
  doc.text('2. RESPONSE STRUCTURE OUTLINE (Cau Truc Trien Khai)', margin, y);
  y += 6;

  data.structureOutline.forEach((step, idx) => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(`Step ${idx + 1}:`, margin + 2, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const cleanStep = removeAccents(step);
    const splitStep = doc.splitTextToSize(cleanStep, contentWidth - 18);
    doc.text(splitStep, margin + 18, y);
    y += Math.max(splitStep.length * 4.5, 6);
  });
  y += 4;

  // Ideas & Directions
  if (data.ideas && data.ideas.length > 0) {
    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(79, 70, 229);
    doc.text('3. IDEAS & TALKING POINTS (Goi Y Huong Y Tuong)', margin, y);
    y += 6;

    data.ideas.forEach((idea) => {
      checkPageBreak(8);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(51, 65, 85);
      const cleanIdea = removeAccents(idea);
      const splitIdea = doc.splitTextToSize(`• ${cleanIdea}`, contentWidth - 4);
      doc.text(splitIdea, margin + 2, y);
      y += splitIdea.length * 4.5 + 2;
    });
    y += 4;
  }

  // Band 7.0 Target Vocabulary Table
  if (data.vocabulary && data.vocabulary.length > 0) {
    checkPageBreak(35);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(5, 150, 105); // Emerald green
    doc.text(`4. BAND 7.0 TARGET VOCABULARY & COLLOCATIONS (${data.vocabulary.length} Items)`, margin, y);
    y += 6;

    data.vocabulary.forEach((item, idx) => {
      checkPageBreak(22);

      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(226, 232, 240);
      doc.roundedRect(margin, y, contentWidth, 18, 1.5, 1.5, 'FD');

      // Term & Type
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(13, 148, 136); // Teal
      doc.text(`${idx + 1}. ${item.term}`, margin + 3, y + 5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text(`(${item.type})`, margin + 65, y + 5);

      // Definition
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(180, 83, 9); // Amber
      const cleanDef = removeAccents(item.definition);
      doc.text(`Nghia: ${cleanDef}`, margin + 3, y + 10);

      // Example
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);
      const cleanEx = removeAccents(item.example);
      const splitEx = doc.splitTextToSize(`Ex: "${cleanEx}"`, contentWidth - 6);
      doc.text(splitEx[0], margin + 3, y + 15);

      y += 21;
    });
    y += 4;
  }

  // Model Sample Answer
  checkPageBreak(40);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(79, 70, 229);
  doc.text('5. BAND 7.0 MODEL SAMPLE ANSWER (Cau Tra Loi Mau)', margin, y);
  y += 6;

  doc.setFillColor(238, 242, 255); // Indigo light
  doc.setDrawColor(199, 210, 254);
  const cleanSample = removeAccents(data.sampleAnswer);
  const splitSample = doc.splitTextToSize(cleanSample, contentWidth - 8);
  const boxHeight = splitSample.length * 4.5 + 8;

  checkPageBreak(boxHeight + 5);
  doc.roundedRect(margin, y, contentWidth, boxHeight, 2, 2, 'FD');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 27, 75);
  doc.text(splitSample, margin + 4, y + 6);

  y += boxHeight + 8;

  // Common Mistakes
  if (data.commonMistakes && data.commonMistakes.length > 0) {
    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(225, 29, 72); // Rose red
    doc.text('6. COMMON MISTAKES TO AVOID (Loi Thuong Gap)', margin, y);
    y += 6;

    data.commonMistakes.forEach((mistake) => {
      checkPageBreak(8);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(159, 18, 57);
      const cleanMistake = removeAccents(mistake);
      const splitM = doc.splitTextToSize(`• ${cleanMistake}`, contentWidth - 4);
      doc.text(splitM, margin + 2, y);
      y += splitM.length * 4 + 2;
    });
    y += 4;
  }

  // Follow up questions
  if (data.followUpQuestions && data.followUpQuestions.length > 0) {
    checkPageBreak(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(79, 70, 229);
    doc.text('7. FOLLOW-UP PRACTICE QUESTIONS (Cau Hoi Mo Rong)', margin, y);
    y += 6;

    data.followUpQuestions.forEach((q) => {
      checkPageBreak(8);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      const cleanQ = removeAccents(q);
      const splitFQ = doc.splitTextToSize(`• "${cleanQ}"`, contentWidth - 4);
      doc.text(splitFQ, margin + 2, y);
      y += splitFQ.length * 4 + 2;
    });
  }

  // Save the PDF file
  const fileName = `IELTS_Speaking_${data.part.replace(/\s+/g, '_')}_Lesson.pdf`;
  doc.save(fileName);
}
