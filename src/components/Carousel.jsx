import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Автоматическое переключение слайдов
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Переключение каждые 5 секунд

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return <div>Нет изображений</div>;
  }

  if (images.length === 1) {
    return (
      <div className="relative">
        <img
          loading="lazy"
          src={`/assets/${images[0]}`}
          className="h-auto max-w-full rounded-lg"
          alt="Изображение"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Основное изображение */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          loading="lazy"
          src={`/assets/${images[currentIndex]}`}
          className="w-full h-auto transition-transform duration-500 ease-in-out"
          alt={`Слайд ${currentIndex + 1}`}
        />
        
        {/* Левая кликабельная область */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-0 w-1/3 h-full bg-transparent hover:bg-black hover:bg-opacity-10 transition-all duration-200 cursor-pointer"
          aria-label="Предыдущий слайд"
        >
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-opacity-0 hover:text-opacity-100 transition-all duration-200">
            <MdOutlineKeyboardArrowLeft size={32} />
          </div>
        </button>
        
        {/* Правая кликабельная область */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-0 w-1/3 h-full bg-transparent hover:bg-black hover:bg-opacity-10 transition-all duration-200 cursor-pointer"
          aria-label="Следующий слайд"
        >
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-opacity-0 hover:text-opacity-100 transition-all duration-200">
            <MdKeyboardArrowRight size={32} />
          </div>
        </button>
      </div>

      {/* Индикаторы */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-blue-500' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
