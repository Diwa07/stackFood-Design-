import React from 'react'
import balen from '../../image/balen.png'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const TwelfthPage = () => {
  return (
    <div className='h-auto px-[10%] flex justify-center py-5 flex-col  text-center  '>
        <div className='flex justify-center' >
            <h1 className=' font-bold text-[27px]'>
            We Don’t Sell Products, We Make <span className='text-[#FE5926]' >  Success Stories </span> 
            </h1>
        </div>


        <div className='h-auto py-7' >
        <Swiper
          className= ""
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
       
          autoplay={{ delay: 4000 }}
          loop={true}
          navigation={true}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
 
        >
              
              <SwiperSlide className=' py-7' >
       
       <div className='flex flex-col px-[10%] items-center gap-8 ' >
       
       <div className='h-[6rem] border-[2px] border-[yellow]  w-[6rem] bg-[blue] rounded-full  ' >
         <img src={balen} alt='' className='w-full h-full bg-cover rounded-full '  />
       </div>
       
       <h1 className='text-[23px]  font-semibold ' >  Guzman F </h1>
       <h2 className='text-[17px]  font-semibold  text-[#FE5926] ' >  Businessman, Senegal</h2>
       
       <p className='px-[5%] text-[20px] ' >
       “With StackFood, I’ve transformed the online food order services into a new height in my country. Now, people can order food on the go and choose the “takeaway” option. So they can pick up the food themselves before returning to their home or workplaces. It’s amazing, and people are loving it!”
       </p>
       </div>
                 </SwiperSlide>


                 <SwiperSlide className=' py-7' >
       
       <div className='flex flex-col px-[10%] items-center gap-8 ' >
       
       <div className='h-[6rem] border-[2px] border-[yellow]  w-[6rem] bg-[blue] rounded-full  ' >
         <img src={balen} alt='' className='w-full h-full bg-cover rounded-full '  />
       </div>
       
       <h1 className='text-[23px]  font-semibold ' >  Michael  .j </h1>
       <h2 className='text-[17px]  font-semibold text-[#FE5926] ' >  Businessman, Kualalampur </h2>
       
       <p className='px-[5%] text-[20px] ' >
       “With StackFood, I’ve transformed the online food order services into a new height in my country. Now, people can order food on the go and choose the “takeaway” option. So they can pick up the food themselves before returning to their home or workplaces. It’s amazing, and people are loving it!”
       </p>
       </div>
                 </SwiperSlide>

          <SwiperSlide className=' py-7' >
       
       <div className='flex flex-col px-[10%] items-center gap-8 ' >
       
       <div className='h-[6rem] border-[2px] border-[yellow]  w-[6rem] bg-[blue] rounded-full  ' >
         <img src={balen} alt='' className='w-full h-full bg-cover rounded-full '  />
       </div>
       
       <h1 className='text-[23px]  font-semibold ' > Sobhan T. </h1>
       <h2 className='text-[17px]  font-semibold text-[#FE5926] ' >  Businessman, Ontario </h2>
       
       <p className='px-[5%] text-[20px] ' >
       “With StackFood, I’ve transformed the online food order services into a new height in my country. Now, people can order food on the go and choose the “takeaway” option. So they can pick up the food themselves before returning to their home or workplaces. It’s amazing, and people are loving it!”
       </p>
       </div>
                 </SwiperSlide>

            

         
        </Swiper>








</div>


    </div>
  )
}

export default TwelfthPage