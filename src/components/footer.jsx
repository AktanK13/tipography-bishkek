import React from 'react'

const footer = () => {
  return (
    <footer className="bg-[url('/prism.png')] text-center text-white dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6
              className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <img src="/assets/logo-white.png" alt="" className='w-[300px]' />
            </h6>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center text-xl font-bold uppercase md:justify-start">
              Контакты
            </h6>
            <p className="mb-4">
              <a className="text-white dark:text-neutral-200"
              href='tel:+996(778)100100'
              >Телефон: 0(778)100-100</a>
            </p>
            <p className="mb-4">
              <a className="text-white dark:text-neutral-200"
              href='https://wa.me/996778100100'
              >WhatsApp: 0(778)100-100</a>
            </p>
            <p className="mb-4">
              <a className="text-white dark:text-neutral-200"
              href='mailto:office@tipografiyabishkek.kg'
              >E-mail: office@tipografiyabishkek.kg</a>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6
              className="mb-4 flex justify-center text-xl font-bold uppercase md:justify-start">
              Режим работы
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
            С пн-пт: 9:00 - 18:00
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
            Сб: 10:00 - 16:00
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer