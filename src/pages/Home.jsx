import React from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

const Home = ({ catalog }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    1024: 2,
    500: 1,
  };

  var items = catalog?.map((item, index) => (
    <div
      key={index}
      className="rounded-lg max-w-fit max-h-fit bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
    >
      <Link to={`/${item.url}`}>
        <img
          loading="lazy"
          className="rounded-t-lg"
          src={`/assets/${item.images[0]}`}
          alt=""
        />
      </Link>
      <h5 className="mb-2 p-4 text-xl font-medium leading-tight text-neutral-800 ">
        {item.name}
      </h5>
    </div>
  ));

  return (
    <section className="bg-[url('/homeBackground.png')] w-full py-10">
      <div className="w-[90%] m-auto flex justify-between">
        <div className="hidden md:block w-[18%]">
          <p className=" text-xl font-semibold mb-6">Каталог товаров</p>
          {catalog.map((item, index) => (
            <Link key={index} to={`/${item.url}`}>
              <p className="pl-4 mb-4">{item.name}</p>
            </Link>
          ))}
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid gap-4 md:w-[78%]"
          columnClassName="my-masonry-grid_column"
        >
          {items}
        </Masonry>
      </div>
    </section>
  );
};

export default Home;
