import React from "react";
import Masonry from "react-masonry-css";
import OptimizedImage from "../components/OptimizedImage";
import SEO from "../components/SEO";

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
      <OptimizedImage
        src={`/assets/optimized/${item.images[0]}`}
        alt={item.name}
        className="rounded-t-lg w-full h-auto"
        placeholder={true}
        webp={true}
        sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
      />
    </div>
  ));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Портфолио типографии Бишкек",
    "description": "Примеры работ нашей типографии в Бишкеке. Печать визиток, буклетов, брошюр, листовок и другой полиграфической продукции.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": catalog?.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": item.name,
          "description": `Примеры печати ${item.name.toLowerCase()} в Бишкеке`
        }
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Портфолио - Типография Бишкек"
        description="Портфолио работ типографии в Бишкеке. Примеры печати визиток, буклетов, брошюр, листовок, календарей и другой полиграфической продукции."
        keywords="портфолио типографии Бишкек, примеры работ типографии, печать Бишкек портфолио, полиграфия Бишкек примеры"
        canonical="/portfolio"
        structuredData={structuredData}
      />
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
    </>
  );
};

export default Portfolio;
