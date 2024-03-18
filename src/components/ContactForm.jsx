import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TEAlert } from "tw-elements-react";

export default function ContactForm() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_co2su9x", "template_3ar6o1p", form.current, {
        publicKey: "cq9wWCybYZPU9yLc2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setFailed(true)
        }
      );
  };

  return (
    <section className="bg-white my-12">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="sm:mb-6 lg:mb-20 text-3xl tracking-tight font-semibold text-center text-black">
          СВЯЖИТЕСЬ С НАМИ
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[48%]">
              <label htmlFor="subject" className="block mb-2 text-sm font-medium ">
                Как Вас зовут:
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300  focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Ваше Имя"
                required
              ></input>
            </div>

            <div className="lg:w-[48%]">
              <label htmlFor="email" className="block mb-2 text-sm font-medium ">
                Ваш номер телефона:
              </label>
              <input
                type="tel"
                name="user_tel"
                id="tel"
                className="bg-gray-50 border p-3 border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full"
                placeholder="0(ХХХ)ХХ-ХХ-ХХ"
                required
              ></input>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg  border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Введите ваше сообщение..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-danger-600 sm:w-fit hover:bg-danger-700"
          >
            ОТПРАВИТЬ
          </button>
        </form>

        <TEAlert
          className="z-50 p-2  mt-24 ml-4 text-white"
          color="bg-[#28a745]"
          dismiss
          autohide
          delay={5000}
          open={success}
          setSuccess={setSuccess}
        >
          <strong>успешно отправлено</strong>
        </TEAlert>
        <TEAlert
          className="z-50 p-2  mt-24 ml-4 text-white"
          color="bg-[#ff0e0e]"
          dismiss
          autohide
          delay={5000}
          open={failed}
          setFailed={setFailed}
        >
          <strong>Произошла ошибка!</strong>
        </TEAlert>
      </div>
    </section>
  );
}
