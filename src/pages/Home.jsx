import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

const Home = ({ catalog }) => {
 
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    1024: 2,
    500: 2,
  };

  var items = catalog?.map((item, index) => (
    <div key={index} className="rounded-lg max-w-fit max-h-fit">
      <Link to={`/${item.url}`}>
        <img
          loading="lazy"
          className="rounded-lg"
          src={`/assets/${item.images[0]}`}
          alt=""
        />
      </Link>
      <h5 className="pt-2 text-md text-end font-bold">{item.name}</h5>
    </div>
  ));

  return (
    <section className="bg-[url('/homeBackground.png')] w-full py-10">
      <div className="w-[95%] m-auto flex justify-between">
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
          className="my-masonry-grid gap-2 md:w-[78%]"
          columnClassName="my-masonry-grid_column"
        >
          {items}
        </Masonry>
      </div>
    </section>
  );
};

export default Home;
