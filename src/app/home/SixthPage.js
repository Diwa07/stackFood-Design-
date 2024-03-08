import React, { useState, useEffect } from "react";
import a from "../../image/icona.svg";
import b from "../../image/iconb.svg";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SixthPage = () => {
  const slides = [
    { image: a,  head: ' COD & Digital Payment ' , content: "Provide convenient payment options during checkout." },
    { image: b,  head :'Home Delivery & Takeaway', content: "Turn on or off various delivery options for users. " },
    { image: a, head: ' COD & Digital Payment ' , content: "Provide convenient payment options during checkout." },
    { image: b,  head :'Home Delivery & Takeaway', content: "Turn on or off various delivery options for users. " },
    { image: a, head: ' COD & Digital Payment ' , content: "Provide convenient payment options during checkout." },
    { image: b,  head :'Home Delivery & Takeaway', content: "Turn on or off various delivery options for users. " },
    { image: a, head: ' COD & Digital Payment ' , content: "Provide convenient payment options during checkout." },
    { image: b,  head :'Home Delivery & Takeaway', content: "Turn on or off various delivery options for users. " },
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="lg:h-screen h-auto text-center px-[10%] ">
      <div className="flex flex-col items-center">
        <h1 className="py-5 text-[24px] font-bold ">
          From Search to <span className="text-[#FF5823]"> MUST: </span>{" "}
          Modern & Interactive{" "}
          <span className="text-[#FF5823]"> StackFood </span>
        </h1>
        <p className="py-8 text-[#646B84]">
          Enjoy the unlimited intuitive features in StackFood online food
          delivery solution you’ve been looking for on the internet all along.
        </p>
      </div>

      <div className="w-full ">
        <Swiper
          className=""
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation={true}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
    {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={`py-7 ${index % 2 !== 0 ? 'mt-8' : ''}`}
            >
              <div className="flex flex-col rounded-2xl items-center bg-[#FFEDDB]">
                <div>
                  <img src={slide.image} alt="" />
                </div>
                <div className="py-4 font-semibold " >{slide.head}</div>
                <p className="py-3" >{slide.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center py-7">
        <button className="px-5 text-xl flex gap-4 items-center py-3 rounded-2xl   text-[white] font-bold lg:text-2xl bg-[#FF8730]">
          More Features
        </button>
      </div>
    </div>
  );
};

export default SixthPage;
