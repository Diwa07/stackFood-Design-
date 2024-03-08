import React from "react";
import mobile from "../../image/Home-Page-Checkout_3.2.mp4";

const ExploreDemo = () => {
  return (
    <div className=" h-auto  text-[white] flex justify-center  py-[7%]  px-[10%]  ">
      <div className="  h-auto md:h-[27rem]  grid grid-cols-1 md:grid-cols-2  p-4  rounded-md bg-[#FF9B30]">
        <div className=" flex flex-col justify-center order-2  md:order-1  items-center px-[5%] h-auto  md:h-[25rem]  ">
          <h1 className="py-[7%] text-[28px] font-semibold " >Ensure the Perfect Checkout Journey for Your Customers</h1>
          <p className="py-[7%]" >
            Customers can select food conveniently, customize their orders, and
            complete transactions during checkout. The checkout process is
            simple and minimized with multiple payment options.
          </p>
          <div className='flex justify-center py-2 ' >
      <button className="px-5 text-xl flex gap-4 items-center py-3 rounded-2xl   bg-[white] font-bold lg:text-2xl text-[#FF8730]">
         More Features
        </button>
      </div>

        </div>

        <div className="flex  justify-center order-1 md:order-2 h-[25rem] ">
          <video src= {mobile} autoPlay loop controls={false}  />
        </div> 
      </div>
    </div>
  );
};

export default ExploreDemo;
