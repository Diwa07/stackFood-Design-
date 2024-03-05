import React from "react";
import { GrUpdate } from "react-icons/gr";
import a from '../../image/fourtha.webp'
import b from '../../image/fourthb.svg'
import c from '../../image/fourthc.webp'
import d from '../../image/fourthd.svg'

const FourthPage = () => {
  return (
    <div className="h-auto text-center text-white px-[5%] py-[5%] ">
      <div className=" h-auto justify-center gap-7  items-center md:h-[15rem] rounded-2xl p-5 grid grid-cols-2 md:grid-cols-4 bg-[#FF7536] ">
        <div className="flex flex-col items-center justify-center md:flex-row gap:4 lg:gap-7 ">
          
          <div className="py-2" >
           <img src={a} alt=""/>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold">Elite Author</p>
            <p>On Codecanyon</p>
          </div>
          <div className="w-[1px] hidden md:flex h-[4rem] bg-white" />
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row gap-7 ">
          
        <div className="py-1" >
           <img src={b} alt=""/>
          </div>
          <div className="flex flex-col ">
            <p className="text-xl font-bold">1.7K+</p>
            <p>Product Sold</p>
          </div>
          <div className="w-[1px] hidden md:flex h-[4rem] bg-white" />
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row gap-7 ">
          
        <div className="py-2" >
           <img src={c} alt=""/>
          </div>
          <div className="flex flex-col ">
            <p className="text-xl font-bold">4.9+</p>
            <p>Ratings & Reviews</p>
          </div>
          <div className="w-[1px] hidden md:flex h-[4rem] bg-white" />
        </div>

        <div className="flex items-center flex-col md:flex-row justify-center gap-7  text-[15px] ">
          
          <div className="py-2" >
           <img src={d} alt=""/>
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
