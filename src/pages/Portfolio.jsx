import React from "react";
import Masonry from "react-masonry-css";

const Portfolio = ({ catalog }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  var items = catalog?.map((item, index) => (
    <div
      key={index}
      className="rounded-lg max-w-fit max-h-fit mb-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
    >
        <img
          loading="lazy"
          className="rounded-t-lg"
          src={`/assets/${item.images[0]}`}
          alt=""
        />
    </div>
  ))

  return (
    <section className="bg-[url('/homeBackground.png')] w-full py-10">
      <div className="w-[90%] m-auto">
      <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid gap-4"
          columnClassName="my-masonry-grid_column"
        >
          {items}
        </Masonry>
      </div>
    </section>
  );
};

export default Portfolio;
