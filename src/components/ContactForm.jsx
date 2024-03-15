import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TEAlert } from "tw-elements-react";

export default function ContactForm() {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_97v6nob", "template_3ar6o1p", form.current, {
        publicKey: "H4zDm6D6dW5tkxgxX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setOpen(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section class="bg-white my-12">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-3xl tracking-tight font-semibold text-center text-black">
          СВЯЖИТЕСЬ С НАМИ
        </h2>
        <form ref={form} onSubmit={sendEmail} class="space-y-8">
          <div>
            <label for="subject" class="block mb-2 text-sm font-medium ">
              Как Вас зовут:
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              class="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300  focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Ваше Имя"
              required
            ></input>
          </div>

          <div>
            <label for="email" class="block mb-2 text-sm font-medium ">
              Ваш номер телефона:
            </label>
            <input
              type="tel"
              name="user_tel"
              id="tel"
              class=" bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="0(ХХХ)ХХ-ХХ-ХХ"
              required
            ></input>
          </div>

          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg  border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Введите ваше сообщение..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-danger-600 sm:w-fit hover:bg-danger-700"
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
          open={open}
          setOpen={setOpen}
        >
          <strong>успешно отправлено</strong>
        </TEAlert>
      </div>
    </section>
  );
}
