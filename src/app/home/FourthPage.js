import React from "react";
import { GrUpdate } from "react-icons/gr";
const FourthPage = () => {
  return (
    <div className="h-auto text-white px-[10%] py-[5%] ">
      <div className="h-[15rem] rounded-2xl p-4 grid grid-cols-4 bg-[#FF7536] ">
        <div className="flex items-center justify-center gap-7 ">
          {" "}
          <div>
            <GrUpdate className="text-[3rem] font-bold" />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold">Elite Author</p>
            <p>On Codecanyon</p>
          </div>
          <div className="w-[1px] h-[4rem] bg-white" />
        </div>

        <div className="flex items-center justify-center gap-7 ">
          {" "}
          <div>
            <GrUpdate className="text-[3rem] font-bold" />
          </div>
          <div className="flex flex-col ">
            <p className="text-xl font-bold">1.7K+</p>
            <p>Product Sold</p>
          </div>
          <div className="w-[1px] h-[4rem] bg-white" />
        </div>

        <div className="flex items-center justify-center gap-7 ">
          {" "}
          <div>
            <GrUpdate className="text-[3rem] font-bold" />
          </div>
          <div className="flex flex-col ">
            <p className="text-xl font-bold">4.9+</p>
            <p>Ratings & Reviews</p>
          </div>
          <div className="w-[1px] h-[4rem] bg-white" />
        </div>

        <div className="flex items-center justify-center gap-7 text-[15px] ">
          {" "}
          <div>
            <GrUpdate className="text-[3rem] font-bold" />
          </div>
          <div className="flex flex-col ">
            <p className="text-xl font-bold">Free Update</p>
            <p>Forever & Always</p>
          </div>
          <div className="w-[1px] h-[4rem] bg-white" />
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
