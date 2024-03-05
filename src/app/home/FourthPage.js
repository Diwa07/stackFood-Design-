import React from "react";
import { GrUpdate } from "react-icons/gr";
const FourthPage = () => {
  return (
    <div className="h-auto text-center text-white px-[5%] py-[5%] ">
      <div className=" h-auto justify-center gap-7 items-center md:h-[15rem] rounded-2xl p-5 grid grid-cols-2 md:grid-cols-4 bg-[#FF7536] ">
        <div className="flex flex-col items-center justify-center md:flex-row gap-7 ">
          
          <div>
            <GrUpdate className="text-[3rem] font-bold" />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold">Elite Author</p>
            <p>On Codecanyon</p>
          </div>
          <div className="w-[1px] hidden md:flex h-[4rem] bg-white" />
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row gap-7 ">
          
          <div>
            <GrUpdate className="text-[3rem] font-bold" />
          </div>
          <div className="flex flex-col ">
            <p className="text-xl font-bold">1.7K+</p>
            <p>Product Sold</p>
          </div>
          <div className="w-[1px] hidden md:flex h-[4rem] bg-white" />
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row gap-7 ">
          
          <div>
            <GrUpdate className="text-[3rem] font-bold" />
          </div>
          <div className="flex flex-col ">
            <p className="text-xl font-bold">4.9+</p>
            <p>Ratings & Reviews</p>
          </div>
          <div className="w-[1px] hidden md:flex h-[4rem] bg-white" />
        </div>

        <div className="flex items-center flex-col md:flex-row justify-center gap-7  text-[15px] ">
          
          <div>
            <GrUpdate className="text-[3rem] font-bold" />
          </div>
          <div className="flex flex-col ">
            <p className="text-xl font-bold">Free Update</p>
            <p>Forever & Always</p>
          </div>
          <div className="w-[1px] hidden md:flex h-[4rem] bg-white" />
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
