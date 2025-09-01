import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

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
            <img
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              src={`/assets/optimized/${item.images[0]}`}
              alt={item.name}
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

  return (
    <>
      {/* Блок с технологиями печати */}
      <section className="bg-[url('/homeBackground.png')] w-full py-10">
                 <div className="w-[95%] xl:w-[85%] m-auto">
           <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">
             {/* Текст о технологиях */}
             <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Технологии печати
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Офсетная печать
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Технология офсетной печати имеет широкую сферу применения: она позволяет печатать книги, изготавливать большими тиражами полноцветные брошюры, буклеты, наклейки, плакаты, визитки и другие виды полиграфической продукции с самым разнообразным дизайном.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Цифровая печать
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Технология цифровой печати (принтерная) применяется для производства информационных листовок, буклетов, календарей, стикеров, флаеров и визиток, малыми и сверх малыми тиражами.
                  </p>
                </div>
                
                  <p className="text-gray-600 leading-relaxed">
                  Цифровая и офсетная печать не конкурируют друг с другом, а лишь гармонично дополняют. «Солидные» по объему тиражи лучше печатать офсетным способом. Для небольшого тиража идеально подойдет цифровая печать, которая в том числе выручит при срочной подготовке полиграфии.
                  </p>
              </div>
            </div>
            
                                      {/* Изображение */}
             <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
               <img
                 src="/assets/banner.jpeg"
                 alt="Технологии печати"
                 className="w-full max-w-md lg:max-w-none h-64 lg:h-96 object-contain rounded-lg"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Основной контент с каталогом */}
      <section className="bg-[url('/homeBackground.png')] w-full py-10">
      <div className="w-[95%] xl:w-[85%] m-auto flex flex-col md:flex-row gap-6">
        <div className="hidden md:block md:w-1/6 lg:w-1/6 flex-shrink-0">
          <p className="text-xl font-semibold mb-6">Каталог товаров</p>
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
