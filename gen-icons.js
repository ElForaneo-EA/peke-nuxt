import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generate() {
  const svg = fs.readFileSync(path.join(__dirname, 'public', 'pekemind_logo_v4.svg'));

  const s192 = await sharp(svg).resize(192, 192, { background: '#FAFAF7' }).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, 'public', 'pwa-192.png'), s192);
  console.log('Created pwa-192.png');

  const s512 = await sharp(svg).resize(512, 512, { background: '#FAFAF7' }).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, 'public', 'pwa-512.png'), s512);
  console.log('Created pwa-512.png');

  const apple = await sharp(svg).resize(180, 180, { background: '#FAFAF7' }).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, 'public', 'apple-touch-icon.png'), apple);
  console.log('Created apple-touch-icon.png');
}

generate().catch(e => console.error('Error:', e.message));
