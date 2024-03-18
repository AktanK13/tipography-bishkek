import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { FaRegBuilding } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../public/assets/logo.png";
import "../index.css";
import { Link, useLocation  } from "react-router-dom";

const Navbar = ({ routesData }) => {
  const [isSticky, setSticky] = useState(false);
  const { pathname } = useLocation();
  const sortedData = [...routesData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
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
        className={`w-screen py-6 nav:px-2 xl:px-24 bg-white flex justify-between shadow-md ${
          isSticky ? "mySticky" : ""
        }`}
      >
        <span className="hidden md:flex text-lg font-semibold ">
        <Link to="/">
          <img src={logo} alt="logo" className=" w-28 " />
        </Link>
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
        <button className="group md:hidden">
          <GiHamburgerMenu size={28} className="mb-2" />

          {/* menu */}
          <ul className="bg-[#252525] overflow-auto  h-screen w-[70vw] z-1000 pb-10 absolute top-0 -left-full group-focus:left-0 right-0 duration-150 flex flex-col justify-start">
            <button className="py-8 pr-8 relative m-auto">
              <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
              <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
            </button>
            <Link to="/">
              <li className="flex justify-start items-center w-full py-4 px-4 border-b text-white hover:bg-[#2b2b2b]">
                <AiFillHome size={18} className="mr-2" />
                Главная
              </li>
            </Link>
            <Link to="/portfolio">
              <li className="flex justify-start items-center w-full py-4 px-4 border-b text-white hover:bg-[#2b2b2b]">
                <GrGallery size={18} className="mr-2" />
                Портфолио
              </li>
            </Link>
            <Link to="/about">
              <li className="flex justify-start items-center w-full py-4 px-4 border-b text-white hover:bg-[#2b2b2b]">
                <FaRegBuilding size={18} className="mr-2" />О компании
              </li>
            </Link>
            <Link to="/contacts">
              <li className="flex justify-start items-center w-full py-4 px-4 text-white hover:bg-[#2b2b2b]">
                <RiContactsBookLine size={18} className="mr-2" />
                Контакты
              </li>
            </Link>

            <h4 className="text-white font-semibold pt-20 pb-6">
              Каталог товаров
            </h4>
            {sortedData?.map((route, index) => (
              <Link key={index} to={`/${route?.url}`} className="mt-0">
                <li className="flex justify-start w-full py-4 px-4 border-b text-white bg-[#263a44]">
                  {route?.name}
                </li>
              </Link>
            ))}
          </ul>
        </button>

        <div className=" md:hidden">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
