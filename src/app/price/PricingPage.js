import React, { useState } from "react";



const PricingPage = () => {
  const [Regular, setRegular] = useState(true);
  const [Extended, setExtended] = useState(false);

  const toggleRegular = () => {
    setRegular(true);
    setExtended(false);
  };

  const toggleExtended = () => {
    setExtended(true);
    setRegular(false);
  };

  return (
    <div className="flex flex-col h-screen bg-[#FB5607] ">
      <div
        className="flex-1 bg-cover bg-center   text-[#ffffffe3] "
      
      >
        <div className="h-screen/2 lg:h-[60vh]">
          <div className=" mt-[2rem]    flex flex-col items-center">
            <div className="flex flex-col px-4 text-center ">
              <h1 className="text-3xl font-[24px] py-4">
              StackFood Pricing
              </h1>
              <p className="py-4  text-[1rem] lg:text-xl mb-5">
              Choose the best bundle for your multi restaurant eBusiness and get started immediately. Explore the Starter, Combo, and Super Combo packages included under the regular & extended license type.
              </p>
            </div>
            <div className="flex justify-center mb-6 ">
              <div className=" w-[85%]    lg:w-[90%]">
                <div className="flex mb-[4rem] font-semibold justify-center">
                  <p className="border-[2px] flex rounded-3xl text:xl md:text-2xl">
                    <button
                      className={` px-[2rem]  rounded-2xl py-3 ${
                        Regular ? "bg-[#FFFFFF] text-[#FF5D22]" : ""
                      }`}
                      onClick={toggleRegular}
                    >
                      Regular
                    </button>
                    <button
                      className={`px-[2rem]  rounded-2xl py-3 ${
                        Extended ? "bg-[#FFFFFF] text-[#FF5D22]" : ""
                      }`}
                      onClick={toggleExtended}
                    >
                      Extended
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1  mt-[-4rem] md:px-[2%] px-[5%] lg:px-[7%] ">
       
          {Regular && (
        <div className="h-[5rem]     bg-white " > hi its me regular </div>)
       }
        {Extended && (
        <div className="h-[5rem]  bg-white " >  hi its me extended  </div>)
            }
      
      </div>
    </div>
  );
};

export default PricingPage;