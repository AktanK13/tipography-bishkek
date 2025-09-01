import React from 'react';
import OptimizedImage from './OptimizedImage';

const SmartWhatsAppButton = ({ serviceName = '', className = '' }) => {
  const getWhatsAppMessage = () => {
    const baseMessage = "Здравствуйте! Хотел заказать у вас";
    if (serviceName) {
      return `${baseMessage} ${serviceName.toLowerCase()}`;
    }
    return baseMessage;
  };

  const whatsAppUrl = `https://wa.me/996778100100?text=${encodeURIComponent(getWhatsAppMessage())}`;

  return (
    <a
      href={whatsAppUrl}
      className={`inline-flex items-center justify-center px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors duration-200 text-sm font-medium ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <OptimizedImage 
        src="/assets/whatsapp_button.png" 
        alt="WhatsApp" 
        className="w-5 h-5 mr-2"
        webp={true}
      />
      Заказать {serviceName ? serviceName.toLowerCase() : ''}
    </a>
  );
};

export default SmartWhatsAppButton;
