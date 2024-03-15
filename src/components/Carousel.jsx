import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function Carousel({ images }) {
  console.log(images?.length);
  return (
    <>
      {images.length == 1 ? (
        <div>
          <img
            loading="lazy"
            src={`/assets/${images[0]}`}
            className="h-auto max-w-full"
            alt="..."
          />
        </div>
      ) : (
        <TECarousel showControls prevBtnIcon={<MdOutlineKeyboardArrowLeft fill="black"  size={30} />} nextBtnIcon={<MdKeyboardArrowRight fill="black"  size={30}/>} showIndicators ride="carousel">
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {images?.map((image, index) => (
              <TECarouselItem
                key={index}
                itemID={index}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  loading="lazy"
                  src={`/assets/${image}`}
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
            ))}
          </div>
        </TECarousel>
      )}
    </>
  );
}
export default Carousel;
