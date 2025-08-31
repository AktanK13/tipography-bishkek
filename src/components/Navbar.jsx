import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { FaRegBuilding } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../../public/assets/logo.png";
import "../index.css";
import { Link, useLocation  } from "react-router-dom";

const Navbar = ({ routesData }) => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const sortedData = [...routesData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Закрываем мобильное меню при изменении маршрута
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const stickyHeader = document.getElementById("myHeader");
      const sticky = stickyHeader.offsetTop;

      if (window.pageYOffset > sticky) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <div className=" w-full  h-[10vh] bg-[url('/background-header.jpg')]  bg-cover">
        <div className="w-full h-full bg-opacity-60  bg-[#212529]  flex  justify-center items-center">
          <h1 className="xsm:text-2xl sm:text-2xl md:text-4xl xl:text-5xl font-black text-white ">
            ТИПОГРАФИЯ БИШКЕК
          </h1>
        </div>
      </div>

      <div className="" id="myHeader" />
      <div
        className={`w-screen py-2 nav:px-2 xl:px-24 bg-white flex justify-between shadow-md ${
          isSticky ? "mySticky" : ""
        }`}
      >
        <span className="hidden md:flex text-lg font-semibold items-center">
        <Link to="/">
          <img src={logo} alt="logo" className=" w-28 " />
        </Link>
        {/* <a
          href="https://wa.me/996778100100"
          className="ml-4 inline-flex items-center justify-center px-3 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a> */}
        </span>

        <ul className="hidden md:flex items-center xsm:space-x-4 lg:space-x-8">
          <Link to="/" className="">
            <li className={pathname === '/' ? 'font-bold' : ''}>Главная</li>
          </Link>
          <Link to="/portfolio">
            <li className={pathname === '/portfolio' ? 'font-bold' : ''}>Портфолио</li>
          </Link>
          <Link to="/about">
            <li className={pathname === '/about' ? 'font-bold' : ''}>О компании</li>
          </Link>
          <Link to="/contacts">
            <li className={pathname === '/contacts' | pathname === '/contacts/' ? 'font-bold' : ''}>Контакты</li>
          </Link>
          <a href="/contacts/#contactus"
            className="rounded-md border border-transparent bg-red-700 px-5 py-2 text-center font-medium text-white hover:bg-red-600"
          >
            НАПИСАТЬ НАМ
          </a>
        </ul>

        {/* hamburger menu */}
        <button 
          className="md:hidden" 
          onClick={toggleMobileMenu}
          aria-label="Открыть меню"
        >
          <GiHamburgerMenu size={28} className="mb-2" />
        </button>

        {/* mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden" onClick={closeMobileMenu}></div>
        )}

        {/* mobile menu sidebar */}
        <div className={`fixed top-0 left-0 h-screen w-[70vw] bg-[#252525] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* close button */}
            <button 
              className="self-end p-4 text-white hover:bg-[#2b2b2b]"
              onClick={closeMobileMenu}
              aria-label="Закрыть меню"
            >
              <IoClose size={24} />
            </button>

            {/* menu items */}
            <div className="flex-1 overflow-y-auto">
              <Link to="/" onClick={closeMobileMenu}>
                <li className="flex justify-start items-center w-full py-4 px-4 border-b text-white hover:bg-[#2b2b2b]">
                  <AiFillHome size={18} className="mr-2" />
                  Главная
                </li>
              </Link>
              <Link to="/portfolio" onClick={closeMobileMenu}>
                <li className="flex justify-start items-center w-full py-4 px-4 border-b text-white hover:bg-[#2b2b2b]">
                  <GrGallery size={18} className="mr-2" />
                  Портфолио
                </li>
              </Link>
              <Link to="/about" onClick={closeMobileMenu}>
                <li className="flex justify-start items-center w-full py-4 px-4 border-b text-white hover:bg-[#2b2b2b]">
                  <FaRegBuilding size={18} className="mr-2" />О компании
                </li>
              </Link>
              <Link to="/contacts" onClick={closeMobileMenu}>
                <li className="flex justify-start items-center w-full py-4 px-4 border-b text-white hover:bg-[#2b2b2b]">
                  <RiContactsBookLine size={18} className="mr-2" />
                  Контакты
                </li>
              </Link>

              <h4 className="text-white font-semibold pt-20 pb-6 px-4">
                Каталог товаров
              </h4>
              {sortedData?.map((route, index) => (
                <Link key={index} to={`/${route?.url}`} onClick={closeMobileMenu} className="mt-0">
                  <li className="flex justify-start w-full py-4 px-4 border-b text-white bg-[#263a44] hover:bg-[#2b2b2b]">
                    {route?.name}
                  </li>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* <div className=" md:hidden">
          <a
            href="tel:+996(778)100100"
            className=" nav:ml-0 navto:ml-2 nav:px-3 navto:px-5 mb-2 inline-block rounded-md border border-transparent bg-indigo-600 py-2 text-center font-medium text-white hover:bg-indigo-700"
          >
            Позвонить
          </a>
          <a
            href="https://wa.me/996778100100"
            className=" nav:ml-2 navto:ml-2 nav:px-3 navto:px-5 inline-block rounded-md border border-transparent  bg-[#28a745]  py-2 text-center font-medium text-white hover:bg-[#378248]"
          >
            Написать WhatsApp
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
