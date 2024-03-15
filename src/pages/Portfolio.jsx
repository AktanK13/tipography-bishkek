import React from "react";

const Portfolio = ({ catalog }) => {

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
      {items}
      </div>
    </section>
  );
};

export default Portfolio;
