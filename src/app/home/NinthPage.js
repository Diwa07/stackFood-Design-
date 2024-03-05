import React from "react";
import  a from '../../image/servicea.webp'
import  b from '../../image/serviceb.webp'


const NinthPage = () => {
  return (
    <div className="h-auto mt-6 py-auto mb-3  text-black bg-[#FEF9F6] text-center lg:h-screen">
      <div
        className="flex flex-col items-center pb-4 lg:h-screen "
       
      > 
        <div className="mt-[4rem] px-5  text-black text-center  text-2xl">
          
          <h1 className='  text-[24px] font-semibold ' >
          Jumpstart Your Business and<span className='text-[#FF5823]'> Achieve the Perfect Fit</span>  with Our Premium Services
    </h1>
        </div>
        <div className="grid mt-[3rem] px-[10%]  md:px-[4rem] gap-11  items-center    lg:h-[20rem] grid-cols-1 md:grid-cols-2">
          <div className="px-9 rounded-2xl flex flex-col justify-between items-center border h-auto py-7 md:h-[28rem] md:w-[22rem] bg-[white] ">
          <div>
          <img src={a} alt=""/>
         </div>
         <div>
          <img src={b} alt=""/>
         </div>
            <h1 className="text-2xl text-[black] font-bold">Start Your Business Instantly</h1>
            <p className="text-[#848889] text-center ">
            We set up your entire system, from installation to full configuration and app publishing.
            </p>
            <div className="py-5" >
            <button className=' px-2 md:px-5  py-2 md:py-4  rounded-3xl border-[#FF8B2E] border  text-[#FF8B2E]' >Order Accepted Resturent</button>
            </div>
          </div>
          <div className="px-9 rounded-2xl flex flex-col gap-4 items-center justify-between py-5 md:h-[28rem]  h-auto md:w-[22rem] bg-[white] ">
         <div>
          <img src={b} alt=""/>
         </div>
            <h1 className="text-2xl font-bold text-black">
            Make StackFood the Best Fit
            </h1>
            <p className="text-[#848889] text-center ">
            We discuss your business requirements and create unique features that perfectly align with your goals.
            <div className="py-5" >
            <button className=' px-2 md:px-5  py-2 md:py-4 border-[#FF8B2E] border  rounded-3xl text-[#FF8B2E]' >Request Coustomization</button>
            </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinthPage;