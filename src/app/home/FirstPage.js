import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
 import bg1 from '../../image/bg1.svg'
 import bg2 from '../../image/bg2.png'
 import mob from '../../image/mobile.svg'
 import slide from '../../image/slide1.webp'

 import a from '../../image/a-stackfood-animation.webp'
 import b from '../../image/b-stackfood-delivery-solution-map.webp'
 import c from '../../image/c-stackfood-pasta.webp'
 import d from '../../image/d-mc-donalds.webp'
import { FaArrowRight } from "react-icons/fa";
import Nav from "../components/Nav";

const FirstPage = () => {
  return (
    <>
  <Nav/>
      <section className="hidden h-auto grid-cols-2 mb-[5%] lg:grid leftSideImage">
        <div className="flex flex-col items-center justify-center p-7 ">
          <h1 className="flex flex-col text-3xl text-center focnt-bold ">
            <p className="">
              
              Multi Restaurant
              <span className="text-[#FE5824]"> Food Ordering & </span>
            </p>
            <p className="py-3">
              
              <span className="text-[#FE5824]"> Delivery</span> Solution with
              Source Code
            </p>
          </h1>
          <p className="py-4 text-xl text-center text-[#848889]">
            Build your very own multi restaurant online food ordering & delivery
            business with Stackfood’s complete source code & post-purchase
            services.
          </p> 

          <div className="flex font-bold text-white gap-9 py-7 ">
            <button className="py-2 md:py-4 text-xs md:text-2xl flex justify-center items-center rounded-3xl border-[2px] border-[#FF922C] gap-1 md:gap-3 px-2 w-max md:px-7 bg-[#FF922C] shadow-[0px_20px_20px_0px_rgba(255,87,34,.3)]">
              Buy Now <FaArrowRight />
            </button>
            <button className="py-2 md:py-4 text-xs md:text-2xl flex justify-center items-center rounded-3xl border-[2px] border-[#FF922C] gap-1 md:gap-3 px-2 w-max md:px-7 bg-[#FF922C] shadow-[0px_20px_20px_0px_rgba(255,87,34,.3)]">
              
              View demo <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="relative flex h-[20rem] w-auto px-[10%] justify-center bg-center bg-cover lg:h-screen rightSideImage">
         

          <div className="relative flex items-center justify-center w-full h-full ml-3 mr-4 lg:absolute ">
            <div className="py-[5rem] h-full ml-[1.5rem]">
              <div className="relative w-auto h-full rounded-[4.5rem]" >
                <img
                  src={mob}
                  alt=""
                  className="w-full h-full rounded-[2rem] z-[30] relative"    
                />
                <div className="absolute   top-0 left-0 w-full h-full rounded-[2.5rem] pl-[.5rem] pr-[.2rem]">

                <Swiper
          className="h-full rounded-[1.5rem]"
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
       
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
 
        >
              
              <SwiperSlide>
       
              <img src={slide} alt="" className="w-full h-full rounded-[2.5rem] object-fit" />
          </SwiperSlide>

          <SwiperSlide>
       
       <img src={slide} alt="" className="w-full h-full rounded-[2.5rem] object-fit" />
   </SwiperSlide>
         
        </Swiper>









                </div>
              </div>
            </div>

            <div className="absolute flex z-[40] justify-between w-full px-7 top-36">
              <img
                src={b}
                alt=""
                height={150}
                width={170}
                className=" py-[1.5rem] animate-up-down"
              />
              <img
                src={c}
                alt=""
                height={200}
                width={170}
                className=" z-[40] py-[1.5rem] animate-left-right"
              />
            </div>

            <div>
              <img
                src={d}
                alt=""
             
                className="absolute z-[40] left-9 bottom-[7rem] animate-left-right "
              />
            </div>
          </div>
        </div>
      </section>

      
  {/* mobile responsive */}
<section className=" text-[27px] font-semibold text-white lg:hidden" >
    <div  className="bg-center bg-cover " style={{ backgroundImage: `url(${bg2})` , }}>
   

   

    


 <div className="flex flex-col md:px-[10%] px-3  items-center text-center py-[7%]   " >
<div className="px-[10%] " >
<h1 className="py-5 text-[24px] " >
    Multi Restaurant Food Ordering & Delivery Solution with Source Code
    </h1> <p className="py-5  text-[17px] px-[5%]" >
    Build your very own multi restaurant online food ordering & delivery business with Stackfood’s complete source code & post-purchase services.
    </p>
</div>

    <div className="flex justify-center  font-bold text-[12px] text-white gap-9 py-7">
            <button className="py-[10px]  flex justify-center items-center rounded-3xl border-[2px] text-[#FF5722]  border-[#FF922C]  gap-1 px-[15px]  bg-[#FFFFFF]   shadow-[0px_20px_20px_0px_rgba(255,87,34,.3)]">
              Buy Now <FaArrowRight />
            </button>
            <button className="px-[15px] py-[10px] rounded-3xl flex justify-center items-center  gap-1    border-[2px] border-[white]  ">
              
              View demo <FaArrowRight />
            </button>
          </div>
          <div className="relative    flex items-center md:px-0 px-[10%] justify-center w-full h-full">
            <div className="relative  z-[30]     ">
              <img src={mob} alt="" className="h-[300px]  md:h-auto pt-[3rem]" />
              <div className="absolute top-[3rem] left-0 right-0 ">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
                  spaceBetween={5}
                  slidesPerView={1}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  <SwiperSlide>
                    <img src={slide} alt="" className="w-full h-[15.5rem] pl-[7px]     pr-[5px] pt-[6px] pb-[2px] md:h-[31.2rem] rounded-[1.2rem]" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>


            
            <div className="absolute flex justify-between w-full top-20 md:top-36">
              <img
                src={b}
                alt=""
                height={200}
                width={200}
                 
                className=" md:h-[200px] md:w-[200px] h-[100px] w-[100px]  animate-up-down"
              />
              <img
                src={c}
                alt=""
                height={200}
                width={200}
                className=" md:h-[200px] md:w-[200px] h-[100px] w-[100px] animate-left-right"
              />
            </div>

            <div className="absolute bottom-0 z-20 left-4 " >
              <img
                src={d}
                alt=""
                height={200}
                width={200}
        
                className="px-5 md:px-0 animate-left-right"
              />
           
            </div> 


          </div>
   
   </div>
   

    </div>


</section>


    </>
  );
};

export default FirstPage;
