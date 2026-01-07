import React from "react";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

const Contacts = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Типография Бишкек",
      "telephone": "+996778100100",
      "email": "office.bish@mail.ru",
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
      "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"]
    }
  };

  return (
    <>
      <SEO 
        title="Контакты - Типография Бишкек"
        description="Контактная информация типографии в Бишкеке. Адрес: г. Бишкек, ул. Логвиненко, 59. Телефон: 0778 100100. Email: office.bish@mail.ru. Пн-Пт с 9-00 до 18-00, Обед с 12-00 до 13-00, Сб с 10-00 до 14-00, Вс - выходной."
        keywords="контакты типографии Бишкек, адрес типографии Бишкек, телефон типографии Бишкек, типография Бишкек контакты"
        canonical="/contacts"
        structuredData={structuredData}
      />
      <section className="bg-[url('/homeBackground.png')] w-full py-10">
      <div className="w-[90%] m-auto">
        <h1 className=" text-center text-5xl my-6">Контакты - Типография Бишкек</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.7503718061887!2d74.59924989999998!3d42.88338079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7e15533d8ff%3A0x9d63a7fc21f5e76!2sPikart.%20Poligrafiya%2C%20Pechat&#39;%20Chertezhey%2C%20Reklamno-Suvenirnaya%20Produktsiya!5e0!3m2!1sen!2skg!4v1710501078977!5m2!1sen!2skg"
          className="w-full border-none  h-96"
          loading="lazy"
        ></iframe>
        <div id="contactus" name='contactus' className="text-center mt-8 text-xl">
          <p className="mt-8">
            Адрес: <span className="font-bold">г. Бишкек, ул. Логвиненко, 59</span>
          </p>
          <p className="mt-8">
            Телефон: <span className="font-bold">0778 100100</span>
          </p>
          <p className="mt-8">
            WhatsApp: <span className="font-bold">0778 100100</span>
          </p>
          <p className="mt-8">
            Email:{" "}
            <span className="font-bold">office.bish@mail.ru</span>
          </p>
          <p className="mt-8 border-b-2 pb-12">
            Режим работы: <span className="font-bold">Пн-Пт с 9-00 до 18-00, Обед с 12-00 до 13-00<br />Сб с 10-00 до 14-00<br />Вс - выходной</span>
          </p>
        </div>
        <ContactForm/>
      </div>
    </section>
    </>
  );
};

export default Contacts;
