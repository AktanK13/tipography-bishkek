import React from "react";
import SEO from "../components/SEO";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Типография Бишкек",
      "description": "Профессиональная типография в Бишкеке с полным спектром полиграфических услуг",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Логвиненко, 59",
        "addressLocality": "Бишкек",
        "addressCountry": "KG"
      }
    }
  };

  return (
    <>
      <SEO 
        title="О компании - Типография Бишкек"
        description="О нашей типографии в Бишкеке. Широкий спектр полиграфических услуг, современное оборудование, качество и соблюдение сроков. Узнайте больше о нашей компании."
        keywords="типография Бишкек о компании, полиграфия Бишкек, типография в Бишкеке, о типографии"
        canonical="/about"
        structuredData={structuredData}
      />
      <section className="bg-[url('/homeBackground.png')] w-full py-10">
      <div className="w-[90%] m-auto flex justify-center flex-col items-center">
        <h1 className="text-center text-4xl font-medium leading-tight my-8">О компании - Типография Бишкек</h1>
        <img src="/assets/optimized/Kubariki2.webp" alt="kubariki" className="md:max-w-[500px]" />
        <h2 className=" text-center text-4xl font-medium leading-tight mb-4 mt-8">О нас</h2>
        <p className="mb-4">
          На данный момент парк нашего производства оснащен широким спектром
          оборудования. Мы предлагаем полный спектр полиграфических услуг от
          дизайна до упаковки готовой продукции.
        </p>
        <div className="col-12 col-md-8">
          <h2 className="text-center text-4xl font-medium leading-tight mb-4 mt-8">Почему мы?</h2>
          <ul className="text-left list-disc px-6">
            <li>
              <strong>Соблюдение договоренностей.</strong> Адекватно оценивать
              свои возможности и всегда выполнять договоренности о качестве,
              сроках и ценах на нашу продукцию.
            </li>
            <li>
              <strong>Качество.</strong> Изготавливать продукцию радующую глаз.
            </li>
            <li>
              <strong>Ассортимент.</strong> Проанализировав рынок полиграфии, мы
              сделали выборку из самых популярных видов изделий. ВсЯ печатная
              продукция способная продвигать и создавать имидж бизнеса, бренда
              или компании выпускается нашей типографией.{" "}
            </li>
            <li>
              <strong>Оперативность.</strong> Благодаря парку оборудования
              полного цикла, мы изготавливавшем тиражи в минимально короткие
              сроки.{" "}
            </li>
          </ul>
          <p>
            Так же мы гарантируем внимательное обслуживание и удобные условия
            сотрудничества. Наша типография к вашим услугам.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
