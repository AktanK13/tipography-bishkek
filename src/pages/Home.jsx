import React from "react";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import SEO from "../components/SEO";

const Home = ({ catalog }) => {
 
  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    1024: 2,
    768: 2,
    640: 1,
    480: 1,
  };

  var items = catalog?.map((item, index) => (
    <div key={index} className="group">
      <Link to={`/${item.url}`} className="block">
        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          {/* Изображение */}
          <div className="relative overflow-hidden">
            <OptimizedImage
              src={`/assets/${item.images[0]}`}
              alt={item.name}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              placeholder={true}
              webp={true}
            />
            {/* Градиентный оверлей */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Контент карточки */}
          <div className="p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <h5 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {item.name}
              </h5>
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          

        </div>
      </Link>
    </div>
  ));

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Типография Бишкек",
      "description": "Профессиональная типография в Бишкеке. Печать визиток, буклетов, брошюр, листовок, календарей, блокнотов. Офсетная и цифровая печать.",
      "url": "https://tipography-bishkek.kg",
      "telephone": "+996778100100",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Логвиненко, 59",
        "addressLocality": "Бишкек",
        "addressCountry": "KG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "42.8746",
        "longitude": "74.5698"
      },
      "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
      "priceRange": "$$",
      "serviceArea": {
        "@type": "City",
        "name": "Бишкек"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Услуги типографии в Бишкеке",
        "itemListElement": catalog?.map((item, index) => ({
          "@type": "Offer",
          "position": index + 1,
          "itemOffered": {
            "@type": "Service",
            "name": item.name,
            "description": `Печать ${item.name.toLowerCase()} в Бишкеке`
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Какие услуги предоставляет ваша типография в Бишкеке?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Наша типография в Бишкеке предлагает полный спектр полиграфических услуг: печать визиток, буклетов, брошюр, листовок, календарей, блокнотов, журналов, книг, меню, стикеров и многое другое. Мы работаем с офсетной и цифровой печатью."
          }
        },
        {
          "@type": "Question",
          "name": "Какой способ печати выбрать: офсетную или цифровую?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Офсетная печать идеальна для больших тиражей (от 500 экземпляров) и обеспечивает высокое качество при низкой стоимости единицы продукции. Цифровая печать подходит для малых тиражей (до 500 экземпляров) и срочных заказов."
          }
        },
        {
          "@type": "Question",
          "name": "Сколько времени занимает изготовление заказа?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Сроки изготовления зависят от объема заказа и выбранного способа печати. Цифровая печать обычно выполняется в течение 1-3 рабочих дней, офсетная печать занимает 5-10 рабочих дней в зависимости от тиража."
          }
        },
        {
          "@type": "Question",
          "name": "Предоставляете ли вы услуги дизайна?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, наша типография в Бишкеке предоставляет услуги разработки дизайна и верстки полиграфической продукции. Наши дизайнеры помогут создать уникальный макет."
          }
        },
        {
          "@type": "Question",
          "name": "Есть ли доставка по Бишкеку?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, мы осуществляем доставку готовой полиграфической продукции по всему Бишкеку. Стоимость и сроки доставки обсуждаются индивидуально при оформлении заказа."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Типография в Бишкеке - Печать визиток, буклетов, брошюр"
        description="Профессиональная типография в Бишкеке. Печать визиток, буклетов, брошюр, листовок, календарей, блокнотов. Офсетная и цифровая печать. Быстро, качественно, недорого. Заказ онлайн с доставкой по Бишкеку."
        keywords="типография Бишкек, печать визиток Бишкек, буклеты Бишкек, брошюры Бишкек, листовки Бишкек, календари Бишкек, полиграфия Бишкек, офсетная печать Бишкек, цифровая печать Бишкек, типография в Бишкеке, печать в Бишкеке"
        canonical="/"
        structuredData={structuredData}
      />
      {/* Основной контент с каталогом */}
      <section className="bg-[url('/homeBackground.png')] w-full py-10">
      <div className="w-[95%] xl:w-[85%] m-auto flex flex-col md:flex-row gap-6">
        <div className="hidden md:block md:w-1/6 lg:w-1/6 flex-shrink-0">
          <h2 className="text-xl font-semibold mb-6">Каталог товаров</h2>
          {catalog.map((item, index) => (
            <Link key={index} to={`/${item.url}`}>
              <p className="pl-4 mb-4">{item.name}</p>
            </Link>
          ))}
        </div>
        <div className="md:flex-1">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid gap-2"
            columnClassName="my-masonry-grid_column"
          >
            {items}
          </Masonry>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
