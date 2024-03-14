import React from "react";
import monitor from "../../image/monitor.svg";
import bg from "../../image/secondscreen.webp";
import bg1 from "../../image/secondscreen2.webp";
import straignline from "../../image/straignline.svg";
import ellipse from "../../image/Ellipse-2218.png";
import left from "../../image/leftline.svg";
import right from "../../image/rightline.svg";
import downright from "../../image/downright.svg";
import downleft from "../../image/downleft.svg";
import slidea from "../../image/slidemonitora.webp";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const SecondPage = () => {
  return (
    <div>
      <div className="flex  max-lg:px-[10%]  mb-[2rem] h-auto flex-col items-center">
        <h1 className="py-[2rem] text-[27px] font-semibold  text-center ">
          What Comes with <span className="text-[#FE5926]  "> StackFood? </span>
        </h1>
        <p className="py-[2rem]  text-center text-[#646b84] ">
          StackFood comes with a complete package that you need to get started
          with your online food delivery business easily.
        </p>
        <div className="h-auto ">
          <div className="flex flex-col items-center ">
            <h1 className="text-center text-[#FE5926] font-semibold  ">
              Website
            </h1>
            <div className="flex flex-col ">
              <img src={straignline} alt="" className="h-[2rem]  " />
              <img src={ellipse} alt="" className="h-[2rem] w-[2rem]" />
            </div>
          </div>

          <div className="relative flex flex-col items-center lg:h-screen ">
            <div className="flex px-[10%] max-md:hidden justify-between w-full ">
              <div className="flex flex-col items-center ">
                <h1 className="text-center text-[#FE5926] font-semibold ">
                  Admin Panel
                </h1>
                <div className="flex flex-col ">
                  <img src={left} alt="" className="h-[2rem]  " />
                  <img src={ellipse} alt="" className="h-[2rem] w-[2rem]" />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="text-center text-[#FE5926] font-semibold ">
                  Restaurant panel
                </h1>
                <div className="flex flex-col ">
                  <img src={right} alt="" className="h-[2rem]  " />
                  <img
                    src={ellipse}
                    alt=""
                    className="h-[2rem] mr-2 w-[2rem]"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <div className="max-md:order-3">
                <img src={bg} alt="" className="max-md:hidden" />
                <img src={bg1} alt="" className="md:hidden" />
              </div>
              <div className="flex max-md:hidden  max-lg:mt-[-4rem] lg:mt-[-6rem] justify-between w-full ">
                <div className="flex flex-col items-center ">
                  <div className="flex flex-col max-lg:mr-[4rem]  max-lg:mt-2">
                    <img src={ellipse} alt="" className="h-[2rem] w-[2rem]" />
                    <img src={downleft} alt="" className="h-[2rem]   " />
                  </div>
                  <h1 className="text-center text-[#FE5926] font-semibold ">
                    Deliveryman App (Addon)
                  </h1>
                </div>

                <div className="flex flex-col items-end ">
                  <div className="flex flex-col ">
                    <img
                      src={ellipse}
                      alt=""
                      className="h-[2rem] mr-7 max-lg:mr-4  max-lg:mt-2 w-[2rem]"
                    />
                    <img src={downright} alt="" className="h-[2rem]  " />
                  </div>
                  <h1 className="text-center text-[#FE5926] font-semibold ">
                    Restaurant App (Addon)
                  </h1>
                </div>
              </div>
              <div className="md:absolute max-lg:h-[13rem] top-0 max-md:order-1 -z-10 ">
                <div className="relative p-2  h-[16.4rem] lg:h-[14.5rem] w-[20.5rem] " style={{backgroundImage: `url(${monitor})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                  {/* <img src={monitor} alt="" className="w-full h-full" /> */}

                  <Swiper
          className= ""
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
       
          autoplay={{ delay: 4000 }}
          loop={true}
         
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
 
        >
              
             
          <SwiperSlide  >
          <img src={slidea} className="w-full h-[70%]" alt="" />

                 </SwiperSlide>

                 <SwiperSlide  >
          <img src={slidea} className="w-full h-[70%]" alt="" />

                 </SwiperSlide>
            

         
        </Swiper>


                 
                </div>
            
              </div>
            </div>
        
            <div className="flex flex-col items-center ">
          
              <div className="flex flex-col ">
                <img src={ellipse} alt="" className="h-[2rem] w-[2rem]" />
                <img src={straignline} alt="" className="h-[2rem]  " />
              </div>
              <h1 className="text-center text-[#FE5926] font-semibold ">
                Customer App
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
