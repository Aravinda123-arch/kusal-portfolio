const fs = require('fs');
const path = require('path');

// Simple, robust PDF generator that outputs standard valid PDF-1.4 format without external binary dependencies
function createCV_PDF() {
  const content = [
    "%PDF-1.4",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj",
    "6 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj"
  ];

  // Text stream
  const textLines = [
    "BT",
    "/F1 22 Tf",
    "50 740 Td",
    "(KUSAL ARAVINDA) Tj",
    "/F2 11 Tf",
    "0 -20 Td",
    "(Data Science Undergraduate & UI/UX Designer) Tj",
    "0 -15 Td",
    "(Colombo, Sri Lanka | Kusalaravinda2004@gmail.com | 0761605382 | github.com/Aravinda123-arch) Tj",
    "0 -25 Td",
    "/F1 13 Tf",
    "(PROFESSIONAL SUMMARY) Tj",
    "/F2 10 Tf",
    "0 -16 Td",
    "(Analytical and creative technologist combining statistical data science with intuitive UI/UX design.) Tj",
    "0 -14 Td",
    "(Specialized in NLP, predictive modeling, design systems, and modern front-end web engineering.) Tj",
    "0 -24 Td",
    "/F1 13 Tf",
    "(EDUCATION) Tj",
    "/F2 10 Tf",
    "0 -16 Td",
    "(B.Sc. (Hons) in Data Science | Sri Lanka Technological Campus (SLTC Research University)) Tj",
    "0 -14 Td",
    "(Focus: Machine Learning, NLP, Statistical Analysis, Database Systems, Human-Computer Interaction) Tj",
    "0 -24 Td",
    "/F1 13 Tf",
    "(FEATURED PROJECTS) Tj",
    "/F1 11 Tf",
    "0 -16 Td",
    "(StylePulse - Salon Services Platform | Next.js, TypeScript, Tailwind CSS, REST APIs) Tj",
    "/F2 10 Tf",
    "0 -14 Td",
    "(- Designed end-to-end user experience in Figma and implemented responsive appointment workflows.) Tj",
    "0 -14 Td",
    "(- Built salon discovery, stylist portfolio view, and seamless checkout interaction.) Tj",
    "0 -18 Td",
    "/F1 11 Tf",
    "(NLP Fake News Detection | Python, Scikit-learn, PyTorch/LSTM, TF-IDF, NLTK) Tj",
    "/F2 10 Tf",
    "0 -14 Td",
    "(- Developed ML classification pipelines comparing Logistic Regression (91.2%) and LSTM (93.4%).) Tj",
    "0 -14 Td",
    "(- Performed rigorous evaluation with Precision, Recall, F1-Score, and ROC-AUC curve analysis.) Tj",
    "0 -24 Td",
    "/F1 13 Tf",
    "(LEADERSHIP & EXPERIENCE) Tj",
    "/F2 10 Tf",
    "0 -16 Td",
    "(Active Executive / Committee Member | IEEE Student Branch of SLTC) Tj",
    "0 -14 Td",
    "(- Spearheaded design assets and digital campaigns for national student hackathons and workshops.) Tj",
    "0 -14 Td",
    "(- Collaborated with engineering leads to foster student research and technical excellence.) Tj",
    "0 -24 Td",
    "/F1 13 Tf",
    "(TECHNICAL SKILLS) Tj",
    "/F2 10 Tf",
    "0 -16 Td",
    "(Data Science: Python, Scikit-learn, PyTorch, Pandas, NumPy, NLP, Data Preprocessing, EDA) Tj",
    "0 -14 Td",
    "(UI/UX & Web: Figma, Design Systems, Wireframing, UX Research, Next.js, React, TypeScript, Tailwind CSS) Tj",
    "0 -14 Td",
    "(Tools & Systems: Git, GitHub, SQL, Vercel, RESTful APIs, Linux/Windows CLI) Tj",
    "ET"
  ];

  const streamContent = textLines.join("\n");
  const streamLength = Buffer.byteLength(streamContent);

  const obj4 = [
    "4 0 obj",
    `<< /Length ${streamLength} >>`,
    "stream",
    streamContent,
    "endstream",
    "endobj"
  ];

  // Assemble PDF with correct xref
  const parts = [...content, ...obj4];
  let body = "";
  const offsets = [];

  for (let part of parts) {
    if (part.includes(" 0 obj")) {
      offsets.push(Buffer.byteLength(body, "utf-8"));
    }
    body += part + "\n";
  }

  const xrefStart = Buffer.byteLength(body, "utf-8");
  let xref = "xref\n0 7\n0000000000 65535 f \n";
  for (let off of offsets) {
    xref += String(off).padStart(10, '0') + " 00000 n \n";
  }

  const trailer = `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;
  const pdfData = body + xref + trailer;

  const targetPath = path.join(__dirname, '..', 'public', 'cv', 'Kusal_Aravinda_CV.pdf');
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, pdfData, 'binary');
  console.log(`CV PDF written to: ${targetPath}`);
}

createCV_PDF();
