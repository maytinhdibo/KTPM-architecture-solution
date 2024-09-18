const tesseract = require("node-tesseract-ocr")

async function image2text(path){
  return await tesseract.recognize(path, {
    lang: "eng"
  })
}

module.exports = {
  image2text
}

