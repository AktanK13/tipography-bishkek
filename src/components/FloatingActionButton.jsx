import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsAppUrl = `https://wa.me/996778100100?text=${encodeURIComponent("Здравствуйте! Хотел заказать у вас")}`;
  const phoneNumber = "996778100100";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button - верхняя кнопка */}
      <a
        href={whatsAppUrl}
        className={`absolute bottom-0 right-0 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
        style={{
          transform: isOpen ? 'translateY(-160px)' : 'translateY(0)',
          transitionDelay: isOpen ? '0.2s' : '0s'
        }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Связаться в WhatsApp"
      >
        <OptimizedImage 
          src="/assets/whatsapp_button.png" 
          alt="WhatsApp" 
          className="w-14 h-14"
          webp={true}
        />
      </a>

      {/* Phone Button - средняя кнопка */}
      <button
        onClick={handlePhoneCall}
        className={`absolute bottom-0 right-0  text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
        style={{
          transform: isOpen ? 'translateY(-80px)' : 'translateY(0)',
          transitionDelay: isOpen ? '0.1s' : '0s'
        }}
        aria-label="Позвонить"
      >
        <OptimizedImage 
          src="/assets/call_button.png" 
          alt="Позвонить" 
          className="w-14 h-14"
          webp={true}
        />
      </button>

      {/* Main Toggle Button - основная кнопка */}
      <button
        onClick={toggleMenu}
        className="bg-red-500 text-white rounded-full p-4 shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Открыть меню контактов"
      >
        <svg 
          className="w-6 h-6 transition-transform duration-300" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      </button>
    </div>
  );
};

export default FloatingActionButton;
