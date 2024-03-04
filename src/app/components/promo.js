import React from "react";


const Promo = () => {
  return (
    <div className="   py-[5%] px-[2%] md:px-[10%] w-full flex  items-center ">
      <div
        className="w-full flex flex-col p-3 md:p-5 justify-center  bg-[#FF6B24] items-center rounded-2xl h-[50%] "
           >
        <div className="flex flex-col py-3  md:py-7 text-[#FFFFFF] px-[10%] text-2xl md:text-[40px]">
          <h1 className="py-3 text-center md:py-7 ">
          Revolutionize the Online Food Delivery <p className="py-5" > Industry with  StackFood! </p>
          </h1>

        
        </div>

        <button className="px-5 text-xl flex gap-4 items-center py-3 rounded-2xl   text-[#FF8626] font-bold lg:text-2xl bg-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Promo;