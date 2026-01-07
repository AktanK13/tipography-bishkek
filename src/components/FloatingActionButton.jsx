import React from 'react';

const FloatingActionButton = () => {
  const whatsAppUrl = `https://wa.me/996778100100?text=${encodeURIComponent("Здравствуйте! Хотел заказать у вас")}`;
  const phoneNumber = "996778100100";

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed right-6 bottom-1/4 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={whatsAppUrl}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 hover:shadow-xl transition-transform duration-200"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Связаться в WhatsApp"
      >
        {/* Иконка WhatsApp (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-10 h-10"
          fill="currentColor"
        >
          <path d="M16 3C9.935 3 5 7.935 5 14c0 2.023.56 3.933 1.55 5.57L5 27l7.64-1.996A10.86 10.86 0 0 0 16 25c6.065 0 11-4.935 11-11S22.065 3 16 3Zm0 2c4.963 0 9 4.037 9 9s-4.037 9-9 9c-1.73 0-3.34-.5-4.71-1.35l-.34-.2-4.18 1.09 1.12-4.06-.22-.35A8.9 8.9 0 0 1 7 14c0-4.963 4.037-9 9-9Zm4.42 11.24c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.36.1-.48.1-.1.24-.26.36-.39.12-.13.16-.22.24-.36.08-.14.04-.26-.02-.38-.06-.12-.54-1.29-.74-1.76-.2-.48-.4-.4-.54-.4h-.46c-.16 0-.4.06-.61.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2.94 2.36.12.16 1.62 2.47 3.93 3.46.55.24.98.38 1.31.48.55.18 1.05.16 1.44.1.44-.06 1.41-.58 1.61-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>

      {/* Phone Button */}
      <button
        onClick={handlePhoneCall}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 hover:scale-110 hover:shadow-xl transition-transform duration-200"
        aria-label="Позвонить"
      >
        {/* Иконка телефона (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-7 h-7"
          fill="currentColor"
        >
          <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l1.99-1.99a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.28a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.24 1.01l-1.99 1.99Z" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingActionButton;
