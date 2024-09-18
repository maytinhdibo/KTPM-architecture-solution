const PDFDocument = require('pdfkit');
const fs = require('fs');

const OUT_FILE = "./output/output.pdf";

function createPDF(text) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(OUT_FILE));
    doc.font('font/Roboto-Regular.ttf')
        .fontSize(14)
        .text(text, 100, 100);
    doc.end();
    return OUT_FILE;
}

module.exports = {
    createPDF
}