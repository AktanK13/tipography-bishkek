import React from "react";

const About = () => {
  return (
    <section className="bg-[url('/homeBackground.png')] w-full py-10">
      <div className="w-[90%] m-auto ">
        <h3 className="text-center text-4xl font-medium leading-tight my-8">О компании</h3>
        <img src="/assets/Kubariki2.jpg" alt="kubariki" />
        <h3 className=" text-center text-4xl font-medium leading-tight mb-4 mt-8">О нас</h3>
        <p className="mb-4">
          На данный момент парк нашего производства оснащен широким спектром
          оборудования. Мы предлагаем полный спектр полиграфических услуг от
          дизайна до упаковки готовой продукции.
        </p>
        <div class="col-12 col-md-8">
          <h2 class="text-center text-4xl font-medium leading-tight mb-4 mt-8">Почему мы?</h2>
          <ul class="text-left list-disc px-6">
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
  );
};

export default About;
