import React from "react";

import { FaCar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
const NinthPage = () => {
  return (
    <div className="h-auto mt-6 text-black lg:h-screen">
      <div
        className="flex flex-col items-center pb-4 border border-black lg:h-screen "
       
      >
        <div className="mt-[4rem] px-5  text-black text-center  text-2xl">
          <h1 className="text-[2rem] ">
          Jumpstart Your Business and Achieve the Perfect Fit with Our Premium Services
            
          </h1>
        </div>
        <div className="grid mt-[3rem] px-[10%]  md:px-[4rem] gap-11  items-center    md:h-[20rem] grid-cols-1 md:grid-cols-2">
          <div className="px-9 rounded-2xl flex flex-col justify-between items-center border lg:w-[27rem]  h-[20rem] py-7 md:w-[22rem] bg-[#E9FFFC] ">
            <FaCar className="text-[7rem] text-[#00A08D] " />
            <h1 className="text-2xl text-[black] font-bold">Start Your Business Instantly</h1>
            <p className="text-[#00A08D] text-center ">
            We set up your entire system, from installation to full configuration and app publishing.
            </p>
            <div>
            <button className=' px-2 md:px-5  py-2 md:py-4  rounded-3xl bg-[#FF8B2E]' >Order Accepted Resturent</button>
            </div>
          </div>
          <div className="px-9 rounded-2xl flex flex-col items-center justify-between py-5  lg:w-[27rem] h-[20rem] md:w-[22rem] bg-[#E9FFFC] ">
            <TbTruckDelivery className="text-[8rem] text-[#00A08D] " />
            <h1 className="text-2xl text-[#00423A] font-bold">
            Make StackFood the Best Fit
            </h1>
            <p className="text-[#00A08D] text-center ">
            We discuss your business requirements and create unique features that perfectly align with your goals.
            <div>
            <button className=' px-2 md:px-5  py-2 md:py-4  rounded-3xl bg-[#FF8B2E]' >Order Accepted Resturent</button>
            </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinthPage;