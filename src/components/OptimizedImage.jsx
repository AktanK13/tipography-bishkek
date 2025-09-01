import React, { useState, useEffect, useRef } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = true,
  webp = true,
  sizes = '100vw',
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef(null);

  useEffect(() => {
    if (!src) return;

    // Проверяем поддержку WebP
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    const supportsWebP = checkWebPSupport();
    
    // Определяем оптимальный источник изображения
    let imageSrc = src;
    
    if (webp && supportsWebP) {
      // Если изображение не в папке optimized, сначала переводим в optimized
      if (!src.includes('optimized')) {
        const optimizedSrc = src.replace('/assets/', '/assets/optimized/');
        // Затем заменяем расширение на .webp
        const webpSrc = optimizedSrc.replace(/\.[^.]+$/, '.webp');
        imageSrc = webpSrc;
      } else {
        // Если уже в optimized, просто заменяем расширение на .webp
        const webpSrc = src.replace(/\.[^.]+$/, '.webp');
        imageSrc = webpSrc;
      }
    } else if (!src.includes('optimized')) {
      // Если WebP не поддерживается, используем оптимизированную версию в оригинальном формате
      const optimizedSrc = src.replace('/assets/', '/assets/optimized/');
      imageSrc = optimizedSrc;
    }

    setCurrentSrc(imageSrc);
  }, [src, webp]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    if (currentSrc.includes('.webp')) {
      // Если WebP не загрузился, пробуем оптимизированную версию в оригинальном формате
      const fallbackSrc = currentSrc.replace('.webp', '').replace(/\.[^.]+$/, '');
      const originalExt = src.split('.').pop();
      const optimizedFallback = fallbackSrc + '.' + originalExt;
      setCurrentSrc(optimizedFallback);
      setHasError(false);
    } else if (currentSrc.includes('optimized') && !currentSrc.includes('.webp')) {
      // Если оптимизированная версия не загрузилась, пробуем оригинал
      const fallbackSrc = src;
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    } else {
      setHasError(true);
      setIsLoaded(false);
    }
  };

  // Предзагрузка для приоритетных изображений
  useEffect(() => {
    if (priority && currentSrc) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = currentSrc;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, currentSrc]);

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Ошибка загрузки</span>
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
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
