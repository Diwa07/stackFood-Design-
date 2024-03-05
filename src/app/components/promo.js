import React from "react";
import rocket from '../../image/rocket.webp'
import { FaArrowRight } from "react-icons/fa";


const Promo = () => {
  return (
    <div className="   py-[5%] px-[2%] md:px-[10%] w-full flex  items-center ">
      <div
        className="w-full flex flex-col p-3 md:p-5 justify-center  relative bg-[#FF6B24] items-center rounded-2xl h-[50%] "
           >
        <div className="flex flex-col py-3 md:py-7 text-[#FFFFFF] px-[3%] md:px-[10%] text-[28px] md:text-[40px]">
          <h1 className="text-center py-7">
          Revolutionize the Online Food Delivery <span className="py-5" > Industry with  StackFood! </span>
          </h1>

        
        </div>

        <button className="px-5 text-xl flex gap-4 items-center py-5 rounded-3xl   text-[#FF8626] font-bold lg:text-2xl bg-white">
          Buy Now <FaArrowRight />
        </button>
        <div className="absolute  h-[4rem] flex right-1 -top-7 z-3 " >
        <img src={rocket} alt=""/>
      </div>
      </div>
     
    </div>
  );
};

export default Promo;