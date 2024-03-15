import React from "react";
import ContactForm from "../components/ContactForm";

const Contacts = () => {
  return (
    <section className="bg-[url('/homeBackground.png')] w-full py-10">
      <div className="w-[90%] m-auto">
        <h1 className=" text-center text-5xl my-6">Контакты</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.7503718061887!2d74.59924989999998!3d42.88338079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7e15533d8ff%3A0x9d63a7fc21f5e76!2sPikart.%20Poligrafiya%2C%20Pechat&#39;%20Chertezhey%2C%20Reklamno-Suvenirnaya%20Produktsiya!5e0!3m2!1sen!2skg!4v1710501078977!5m2!1sen!2skg"
          className="w-full border-none  h-96"
          loading="lazy"
        ></iframe>
        <div class="text-center mt-8 text-xl">
          <p className="mt-8">
            Адрес: <span className="font-bold">ул. Логвиненко 32, офис 8</span>
          </p>
          <p className="mt-8">
            Телефон: <span className="font-bold">0(778)100-100</span>
          </p>
          <p className="mt-8">
            WhatsApp: <span className="font-bold">0(778)100-100</span>
          </p>
          <p className="mt-8 border-b-2 pb-12">
            Email:{" "}
            <span className="font-bold">office@tipografiyabishkek.kg</span>
          </p>
        </div>
        <ContactForm/>
      </div>
    </section>
  );
};

export default Contacts;
