const fs = require('fs');
const path = require('path');

// Маппинг русских названий на английские
const nameMapping = {
  'Блокнот.jpeg': 'notebook.jpeg',
  'Бумажный пакет.jpeg': 'paper_bag.jpeg',
  'Ежедневник.jpeg': 'daily_planner.jpeg',
  'Журнал учета.jpeg': 'accounting_journal.jpeg',
  'Кепка.jpeg': 'cap.jpeg',
  'Книга 1.jpeg': 'book_1.jpeg',
  'Книга.jpeg': 'book.jpeg',
  'Кубарик.jpeg': 'memo_cube.jpeg',
  'Листовки.jpeg': 'flyers.jpeg',
  'Меню.jpeg': 'menu.jpeg',
  'Печать лекало, чертежей.jpeg': 'pattern_printing.jpeg',
  'Стикеры на товары.jpeg': 'product_stickers.jpeg',
  'Удостоверения.jpeg': 'certificates.jpeg',
  'Шопер.jpeg': 'shopper_bag.jpeg'
};

const sourceDir = path.join(__dirname, '../public/new_images');
const targetDir = path.join(__dirname, '../public/assets/optimized');

// Создаем папку optimized если её нет
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Начинаем переименование и копирование файлов...');

Object.entries(nameMapping).forEach(([oldName, newName]) => {y
    
  const sourcePath = path.join(sourceDir, oldName);
  const targetPath = path.join(targetDir, newName);
  
  if (fs.existsSync(sourcePath)) {
    try {
      // Копируем файл с новым именем
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✓ ${oldName} → ${newName}`);
    } catch (error) {
      console.error(`✗ Ошибка при копировании ${oldName}:`, error.message);
    }
  } else {
    console.warn(`⚠ Файл не найден: ${oldName}`);
  }
});

console.log('Переименование и копирование завершено!');
