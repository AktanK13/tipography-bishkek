import React from 'react';
import OptimizedImage from './OptimizedImage';

const FloatingActionButton = () => {
  const whatsAppUrl = `https://wa.me/996778100100?text=${encodeURIComponent("Здравствуйте! Хотел заказать у вас")}`;
  const phoneNumber = "996778100100";

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={whatsAppUrl}
        className="text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-200"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Связаться в WhatsApp"
      >
        <OptimizedImage 
          src="/assets/optimized/whatsapp_button.png" 
          alt="WhatsApp" 
          className="w-20 h-20"
          webp={true}
        />
      </a>

      {/* Phone Button */}
      <button
        onClick={handlePhoneCall}
        className="text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-200"
        aria-label="Позвонить"
      >
        <OptimizedImage 
          src="/assets/optimized/call_button.png" 
          alt="Позвонить" 
          className="w-20 h-20"
          webp={true}
        />
      </button>
    </div>
  );
};

export default FloatingActionButton;
