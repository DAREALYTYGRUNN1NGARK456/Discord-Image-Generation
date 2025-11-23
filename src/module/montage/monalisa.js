const jimp = require(`jimp`);
const { validateURL } = require(`../functions`);
module.exports = class Monalisa {
    async getImage(image) {
        if (!image) return console.error(`You must provide an image as a first argument.`);
        let isValid = await validateURL(image);
        if (!isValid) return console.error(`You must provide a valid image URL or buffer.`);
        let bg = await jimp.read(`${__dirname}/../../assets/monalisa.png`);
        let img = await jimp.read(image);
 const headX = bg.bitmap.width * 0.32;
  const headY = bg.bitmap.height * 0.13;
  const headW = bg.bitmap.width * 0.36;
  const headH = bg.bitmap.height * 0.30;
/*

const x = base.bitmap.width * 0.32;
  const y = base.bitmap.height * 0.13;
  const w = base.bitmap.width * 0.36;
  const h = base.bitmap.height * 0.30;

*/
  // Resize overlay to roughly match the head size
  img.resize(headW, headH)
        img.circle()
      //  img.resize(140, 140);
        // 46, 43
        bg.composite(img, headX, headY);
        return await bg.getBufferAsync(`image/png`);
    }
};





/*
const headX = base.bitmap.width * 0.35;
  const headY = base.bitmap.height * 0.10;
  const headW = base.bitmap.width * 0.30;
  const headH = base.bitmap.height * 0.30;

  // Resize overlay to roughly match the head size
  overlay.resize(headW, headH)

const base = await loadImage("./president.png");
  const overlay = await loadImage("./overlay.png");

  const canvas = createCanvas(base.width, base.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(base, 0, 0);

  // Estimated head position
  const x = base.width * 0.35;
  const y = base.height * 0.10;
  const w = base.width * 0.30;
  const h = base.height * 0.30;

*/
