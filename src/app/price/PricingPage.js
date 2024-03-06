import React, { useState } from "react";
import bg1 from "../../image/bg2.png";

import { FaCheckCircle } from "react-icons/fa";
import Regular from "./Regular";
import Extended  from "./Extended";

const Pricing = () => {
  const [showRegular, setshowRegular] = useState(true);
  const [showExtended, setShowExtended] = useState(false);

  const toggleRegular = () => {
    setshowRegular(true);
    setShowExtended(false);
  };

  const toggleExtended = () => {
    setShowExtended(true);
    setshowRegular(false);
  };

  return (
    <div className="flex bg-[#FEFEFE] flex-col min-h-screen ">
      <div
        className="flex-1 bg-cover bg-center   text-[#ffffffe3] "
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-screen/2 lg:h-[55vh]">
          <div className=" mt-[2rem]    flex flex-col items-center">
            <div className="flex flex-col px-4 text-center ">
              <h1 className="text-3xl font-[24px] py-4">
              StackFood Pricing
              </h1>
              <h1 className="py-4  text-[1rem] lg:text-xl mb-5">
           <p className="px-9" >
           Choose the best bundle for your multi restaurant eBusiness and get started immediately. Explore the Starter, Combo, and Super Combo packages included under the regular & extended license type
           </p>
              </h1>
            </div>
            <div className="flex justify-center mb-6 ">
              <div className=" w-[85%]   lg:w-[90%]">
                <div className="flex mb-[4rem] font-semibold justify-center">
                  <p className="border-[2px] flex rounded-3xl text:xl md:text-2xl">
                    <button
                      className={` px-[2rem] rounded-2xl py-3 ${
                        showRegular ? "bg-[#FFFFFF] text-[#FF8332]" : ""
                      }`}
                      onClick={toggleRegular}
                    >
                     Regular
                    </button>
                    <button
                      className={`px-[2rem]  rounded-2xl py-3 ${
                        showExtended ? "bg-[#FFFFFF] text-[#FF8332]" : ""
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

      <div className="flex-1  mt-[-4rem] md:px-[2%] px-[10%]  lg:px-[13%] ">
    
      {showRegular && (
          <div className="grid justify-start grid-cols-1 sm:items-center md:grid-cols-3">
            {Regular &&
              Regular.map((item, id) => {
                return (
                  <div
                    className={` text-black border-[1px] relative    items-center border-[#212c4f] rounded-xl mb-5 flex flex-col justify-between py-5 px-3 sm:px-5 ${
                      id === 2
                        ? " h-auto lg:h-[42rem] text-white "
                        : " h-auto lg:h-[38rem] text-[black] "
                    }  w-auto sm:w-full ${
                      id === 2 ? "bg-[#FF5A23] " : "bg-[white]"
                    } ${id === 2 ? "mt-0 md:mt-[-1rem] text-[white] " : ""}`}
                  >
                    <ul
                      className={`${
                        id === 2 ? " text-[white]" : "text-[#646b84]"
                      } flex `}
                    >
                      <div className="">
                        <div className="flex flex-col items-center " >
                      
                          <h1 className="mt-5 text-4xl font-bold ">{item.price}</h1>
                          <li className="mb-2 text-3xl font-bold py-7 md:text-2xl lg:text-3xl ">
                            {item.title}
                          </li>
                        
                        </div>

                        <div className="absolute right-0 flex top-1 ">
                          
                          {item.mostpopular === true ? (
                            <div className=" items-center   rounded-xl bg-[#FBFF43]">
                              <h1 className="flex justify-center items-center font-bold p-2  text-[#FF5722]">
                              mostpopular
                              </h1>
                            </div>
                          )  : null}
                        </div>
                      </div>
                    </ul>
                   
                    <h2  className={`${
                              id === 2 ? "text-[white]" : " text-[#FF5722]" 
                            } text-[14px]  font-bold`}>{item.description1}</h2>
                    <ul className="flex flex-col px-3 mb-4 sm:px-7 i ">
                      {item.features.map((feature, index) => (
                        <li className="   flex gap-4   items-center   mt-[1rem]">
                          <span
                            className={`${
                              id === 2 ? "text-[white]" : " text-[#29B168]"
                            }`}
                          >
                     <FaCheckCircle />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul> 
                    <div className={`${
                              id === 2 ? "text-[white] bg-[#FE6B1F] " : " bg-[#FFF2EF] text-[#FF5722]" 
                            } text-[14px]  font-bold`}>{item.description2}
                    
                     </div>
{item.PremiumAddonsIncluded &&
                    <ul className="flex flex-col px-3 mb-4 sm:px-7 i ">
                      {item.PremiumAddonsIncluded.map((PremiumAddonsIncluded, index) => (
                        <li className="   flex gap-4   items-center   mt-[1rem]">
                          <span
                            className={`${
                              id === 2 ? "text-[white]" : " text-[#646b84]"
                            }`}
                          >
                     <FaCheckCircle className="text-[#FBFF43]" />
                          </span>
                          <span>{PremiumAddonsIncluded}</span>
                        </li>
                      ))}
                    </ul> }

                    <li className="flex justify-start px-5 sm:px-0 sm:justify-center">
                      <button
                        className={`${
                          id === 2 ? "bg-[white]  " : " bg-[#FF902D] "
                        } h-[3rem] lg-px-7 px-4 items-center   font-bold   rounded-2xl hover:bg-[#FF902D] ${
                          id === 2 ? "text-[#FF902D] " : "text-white "
                        } `}
                      >
                        Buy Now
                      </button>
                    </li>
                  </div>
                );
              })}
          </div>
        )}
         {showExtended && (
          <div className="grid justify-start grid-cols-1 sm:items-center md:grid-cols-3">
            {Extended &&
              Extended.map((item, id) => {
                return (
                  <div
                    className={` text-black border-[1px] relative    items-center border-[#212c4f] rounded-xl mb-5 flex flex-col justify-between py-5 px-3 sm:px-5 ${
                      id === 2
                        ? " h-auto lg:h-[42rem] text-white "
                        : " h-auto lg:h-[38rem] text-[black] "
                    }  w-auto sm:w-full ${
                      id === 2 ? "bg-[#FF5A23] " : "bg-[white]"
                    } ${id === 2 ? "mt-0 md:mt-[-1rem] text-[white] " : ""}`}
                  >
                    <ul
                      className={`${
                        id === 2 ? " text-[white]" : "text-[#646b84]"
                      } flex `}
                    >
                      <div className="">
                        <div className="flex flex-col items-center " >
                      
                          <h1 className="text-4xl font-bold ">{item.price}</h1>
                          <li className="mb-2 text-3xl font-bold py-7 md:text-2xl lg:text-3xl ">
                            {item.title}
                          </li>
                        
                        </div>

                        <div className="absolute right-0 flex top-1 ">
                          
                          {item.mostpopular === true ? (
                            <div className=" items-center   rounded-xl bg-[#FBFF43]">
                              <h1 className="flex justify-center items-center font-bold p-2  text-[#FF5722]">
                              mostpopular
                              </h1>
                            </div>
                          )  : null}
                        </div>
                      </div>
                    </ul>
                   
                    <h2  className={`${
                              id === 2 ? "text-[white]" : " text-[#FF5722]" 
                            } text-[14px]  font-bold`}>{item.description1}</h2>
                    <ul className="flex flex-col px-3 mb-4 sm:px-7 i ">
                      {item.features.map((feature, index) => (
                        <li className="   flex gap-4   items-center   mt-[1rem]">
                          <span
                            className={`${
                              id === 2 ? "text-[white]" : " text-[#29B168]"
                            }`}
                          >
                     <FaCheckCircle />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul> 
                    <div className={`${
                              id === 2 ? "text-[white] bg-[#FE6B1F] " : " bg-[#FFF2EF] text-[#FF5722]" 
                            } text-[14px]  font-bold`}>{item.description2}
                    
                     </div>
{item.PremiumAddonsIncluded &&
                    <ul className="flex flex-col px-3 mb-4 sm:px-7 i ">
                      {item.PremiumAddonsIncluded.map((PremiumAddonsIncluded, index) => (
                        <li className="   flex gap-4   items-center   mt-[1rem]">
                          <span
                            className={`${
                              id === 2 ? "text-[white]" : " text-[#646b84]"
                            }`}
                          >
                     <FaCheckCircle className="text-[#FBFF43]" />
                          </span>
                          <span>{PremiumAddonsIncluded}</span>
                        </li>
                      ))}
                    </ul> }

                    <li className="flex justify-start px-5 sm:px-0 sm:justify-center">
                      <button
                        className={`${
                          id === 2 ? "bg-[white]  " : " bg-[#FF902D] "
                        } h-[3rem] lg-px-7 px-4 items-center   font-bold   rounded-2xl hover:bg-[#FF902D] ${
                          id === 2 ? "text-[#FF902D] " : "text-white "
                        } `}
                      >
                        Buy Now
                      </button>
                    </li>
                  </div>
                );
              })}
          </div>
        )}


    
      
      </div>
    </div>
  );
};

export default Pricing;