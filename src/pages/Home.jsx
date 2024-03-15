import React from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

const Home = ({ catalog }) => {
  console.log(catalog);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
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
      <div className="w-[90%] m-auto gap-4">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items}
        </Masonry>
      </div>
    </section>
  );
};

export default Home;
