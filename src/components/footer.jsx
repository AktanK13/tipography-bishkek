import React from 'react'

const footer = () => {
  return (
    <footer className="bg-[url('/prism.png')] text-center text-white dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="xsm:mx-6 xl:mx-28 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <h6
              className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <img src="/assets/optimized/logo-white.png" alt="" className='w-[300px] xl:w-[200px]' />
              {/* <a
                href="https://wa.me/996778100100"
                className="ml-4 inline-flex items-center justify-center w-10 h-10 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a> */}
            </h6>
          </div>
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
              href='mailto:Bishkekprint@mail.ru'
              >E-mail: Bishkekprint@mail.ru
              </a>
            </p>
          </div>
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