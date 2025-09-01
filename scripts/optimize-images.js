import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/assets');
const outputDir = path.join(__dirname, '../public/assets/optimized');

// Создаем папку для оптимизированных изображений
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Функция для оптимизации изображения
async function optimizeImage(inputPath, outputPath, quality = 80) {
  try {
    await sharp(inputPath)
      .jpeg({ quality, progressive: true })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const compressionRatio = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(inputStats.size / 1024).toFixed(1)}KB → ${(outputStats.size / 1024).toFixed(1)}KB (сжатие: ${compressionRatio}%)`);
    
    return true;
  } catch (error) {
    console.error(`❌ Ошибка при оптимизации ${inputPath}:`, error.message);
    return false;
  }
}

// Функция для создания WebP версии
async function createWebP(inputPath, outputPath, quality = 80) {
  try {
    const webpPath = outputPath.replace(/\.[^.]+$/, '.webp');
    await sharp(inputPath)
      .webp({ quality })
      .toFile(webpPath);
    
    const inputStats = fs.statSync(inputPath);
    const webpStats = fs.statSync(webpPath);
    const compressionRatio = ((inputStats.size - webpStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → WebP: ${(webpStats.size / 1024).toFixed(1)}KB (сжатие: ${compressionRatio}%)`);
    
    return true;
  } catch (error) {
    console.error(`❌ Ошибка при создании WebP для ${inputPath}:`, error.message);
    return false;
  }
}

// Основная функция
async function optimizeImages() {
  console.log('🚀 Начинаю оптимизацию изображений...\n');
  console.log(`📁 Входная папка: ${inputDir}`);
  console.log(`📁 Выходная папка: ${outputDir}\n`);
  
  const files = fs.readdirSync(inputDir).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('optimized')
  );
  
  console.log(`📊 Найдено файлов для оптимизации: ${files.length}\n`);
  
  let successCount = 0;
  let totalCount = files.length;
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    
    console.log(`🔄 Обрабатываю: ${file}`);
    const success = await optimizeImage(inputPath, outputPath);
    if (success) {
      await createWebP(inputPath, outputPath);
      successCount++;
    }
    console.log(''); // Пустая строка для читаемости
  }
  
  console.log(`\n🎉 Оптимизация завершена! Успешно обработано: ${successCount}/${totalCount} файлов`);
  console.log(`📁 Оптимизированные изображения сохранены в: ${outputDir}`);
}

// Запускаем оптимизацию
optimizeImages().catch(console.error);
