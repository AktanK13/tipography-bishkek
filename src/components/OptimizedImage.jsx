import React, { useEffect, useRef, useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = true,
  webp = true,
  sizes = '100vw',
  priority = false, // Если true, загружается с высоким приоритетом (не lazy)
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const [fallbackAttempted, setFallbackAttempted] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!src) return;

    // Проверяем поддержку WebP более надежным способом
    const checkWebPSupport = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const result = canvas.toDataURL('image/webp');
        return result.indexOf('data:image/webp') === 0;
      } catch (e) {
        return false;
      }
    };

    const supportsWebP = webp && checkWebPSupport();
    
    // Определяем оптимальный источник изображения
    let imageSrc = src;
    
    // Нормализуем путь - убираем двойные слеши
    imageSrc = imageSrc.replace(/\/+/g, '/');
    
    if (supportsWebP) {
      // Если изображение не в папке optimized, сначала переводим в optimized
      if (!src.includes('optimized')) {
        const optimizedSrc = src.replace('/assets/', '/assets/optimized/');
        // Затем заменяем расширение на .webp
        const baseName = optimizedSrc.replace(/\.[^.]+$/, '');
        imageSrc = baseName + '.webp';
      } else {
        // Если уже в optimized, просто заменяем расширение на .webp
        const baseName = src.replace(/\.[^.]+$/, '');
        imageSrc = baseName + '.webp';
      }
    } else if (!src.includes('optimized')) {
      // Если WebP не поддерживается, используем оптимизированную версию в оригинальном формате
      imageSrc = src.replace('/assets/', '/assets/optimized/');
    }

    setCurrentSrc(imageSrc);
    setIsLoaded(false);
    setHasError(false);
    setFallbackAttempted(false);
  }, [src, webp]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    if (!fallbackAttempted) {
      setFallbackAttempted(true);
      
      if (currentSrc.includes('.webp')) {
        // Если WebP не загрузился, пробуем оптимизированную версию в оригинальном формате
        const baseName = currentSrc.replace('.webp', '');
        // Получаем оригинальное расширение из исходного пути
        const originalExt = src.split('.').pop();
        const optimizedFallback = baseName + '.' + originalExt;
        setCurrentSrc(optimizedFallback);
        setHasError(false);
        return;
      }
      
      if (currentSrc.includes('optimized') && !currentSrc.includes('.webp')) {
        // Если оптимизированная версия не загрузилась, пробуем оригинал
        const originalSrc = src;
        setCurrentSrc(originalSrc);
        setHasError(false);
        return;
      }
    }
    
    // Если все fallback'и не сработали
    setHasError(true);
    setIsLoaded(false);
  };


  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Ошибка загрузки</span>
      </div>
    );
  }

  // Не рендерим изображение, пока путь не установлен
  if (!currentSrc) {
    return (
      <div className={`relative ${className}`}>
        {placeholder && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400 text-sm">Загрузка...</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Placeholder */}
      {placeholder && !isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Загрузка...</div>
        </div>
      )}
      
      {/* Изображение */}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
