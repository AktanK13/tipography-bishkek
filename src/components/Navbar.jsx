import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { FaRegBuilding } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = ({ routesData }) => {
  const [isSticky, setSticky] = useState(false);
  const sortedData = [...routesData].sort((a, b) => a.name.localeCompare(b.name))
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
      <div className=" w-full h-[10vh] bg-[url('/background-header.jpg')]  bg-cover">
        <div className="w-full h-full bg-opacity-60  bg-[#000]  flex  justify-center items-center">
          <h1 className=" text-2xl font-black text-white ">
            ТИПОГРАФИЯ БИШКЕК
          </h1>
        </div>
      </div>

      <div className="" id="myHeader" />
      <div
        className={`w-screen py-6 px-5 lg:px-64 bg-white flex justify-between shadow-md ${
          isSticky ? "mySticky" : ""
        }`}
      >
        <span className="hidden md:flex text-lg font-semibold ">Material3</span>

        <ul className="hidden md:flex items-center space-x-5">
          <li>Главная</li>
          <li>Портфолио</li>
          <li>О компании</li>
          <li>Контакты</li>
        </ul>

        {/* hamburger menu */}
        <button className="group md:hidden">
          <GiHamburgerMenu size={28} className="mb-2" />

          {/* menu */}
          <ul className="bg-[#252525] overflow-auto  h-screen w-[80vw]  z-10 pb-10 absolute top-0 -left-full group-focus:left-0 right-0 duration-150 flex flex-col space-y-3  justify-start">
            <button className="px-10 py-8 relative mr-auto">
              <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
              <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
            </button>
            <Link to="/">
              <li className="flex justify-start items-center w-full py-4 px-10 text-white hover:bg-[#2b2b2b]">
                <AiFillHome size={18} className="mr-2" />
                Главная
              </li>
            </Link>
            <Link to="/portfolio">
              <li className="flex justify-start items-center w-full py-4 px-10 text-white hover:bg-[#2b2b2b]">
                <GrGallery size={18} className="mr-2" />
                Портфолио
              </li>
            </Link>
            <Link to="/about">
              <li className="flex justify-start items-center w-full py-4 px-10 text-white hover:bg-[#2b2b2b]">
                <FaRegBuilding size={18} className="mr-2" />О компании
              </li>
            </Link>
            <Link to="/contacts">
              <li className="flex justify-start items-center w-full py-4 px-10 text-white hover:bg-[#2b2b2b]">
                <RiContactsBookLine size={18} className="mr-2" />
                Контакты
              </li>
            </Link>

            <h4 className="text-white font-semibold pt-20 pb-6">Каталог товаров</h4>
            {sortedData?.map((route, index) =>
                <Link key={index} to={`/${route?.url}`}>
                  <li className="flex justify-start items-center w-full py-4 px-10 border-b-[1px] text-white hover:bg-[#2b2b2b]">
                    {route?.name}
                  </li>
                </Link>
              )}
          </ul>
        </button>

        <div className="">
          <a
            href="tel:+996(778)100100"
            className=" mx-2 mb-2 inline-block rounded-md border border-transparent bg-indigo-600 px-5 py-2 text-center font-medium text-white hover:bg-indigo-700"
          >
            Позвонить
          </a>
          <a
            href="https://wa.me/996778100100"
            className=" mx-2 inline-block rounded-md border border-transparent  bg-[#28a745] px-5 py-2 text-center font-medium text-white hover:bg-[#378248]"
          >
            Написать WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
