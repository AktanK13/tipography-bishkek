import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');
const htaccessFile = join(rootDir, '.htaccess');

// Копируем .htaccess в dist
if (existsSync(htaccessFile)) {
  const distHtaccess = join(distDir, '.htaccess');
  copyFileSync(htaccessFile, distHtaccess);
  console.log('✅ .htaccess скопирован в dist/');
} else {
  console.warn('⚠️  Файл .htaccess не найден');
}

console.log('✅ Готово к деплою! Загрузите содержимое папки dist/ на хостинг.');

