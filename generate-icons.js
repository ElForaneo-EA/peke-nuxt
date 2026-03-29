const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '..', 'public', 'pekemind_logo_v4.svg');
const svgBuffer = fs.readFileSync(svgPath);

async function generate() {
  // Generate 192x192 PNG
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'pwa-192x192.png'), png192);
  console.log('Created pwa-192x192.png');

  // Generate 512x512 PNG
  const png512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'pwa-512x512.png'), png512);
  console.log('Created pwa-512x512.png');

  // Generate apple-touch-icon 180x180
  const apple = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'apple-touch-icon.png'), apple);
  console.log('Created apple-touch-icon.png');
}

generate().catch(console.error);
 console.error('Error:', error.message));
