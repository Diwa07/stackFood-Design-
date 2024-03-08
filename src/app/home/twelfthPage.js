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
    <div className='h-auto px-[10%] flex justify-center py-5 flex-col border text-center  border-[black] '>
        <div className='flex justify-center' >
            <h1 className='text-[27px]'>
            We Don’t Sell Products, We Make <span>  Success Stories </span> 
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
       
       <h1 className='text-[17px]  font-semibold ' >  BBBBBB </h1>
       <h2 className='text-[15px]  font-semibold ' > Micheal J </h2>
       
       <p className='px-[5%]' >
       unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>
       </div>
                 </SwiperSlide>


                 <SwiperSlide className=' py-7' >
       
       <div className='flex flex-col px-[10%] items-center gap-8 ' >
       
       <div className='h-[6rem] border-[2px] border-[yellow]  w-[6rem] bg-[blue] rounded-full  ' >
         <img src={balen} alt='' className='w-full h-full bg-cover rounded-full '  />
       </div>
       
       <h1 className='text-[17px]  font-semibold ' >  AAAAAAAA </h1>
       <h2 className='text-[15px]  font-semibold ' > Micheal J </h2>
       
       <p className='px-[5%]' >
       unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>
       </div>
                 </SwiperSlide>

          <SwiperSlide className=' py-7' >
       
       <div className='flex flex-col px-[10%] items-center gap-8 ' >
       
       <div className='h-[6rem] border-[2px] border-[yellow]  w-[6rem] bg-[blue] rounded-full  ' >
         <img src={balen} alt='' className='w-full h-full bg-cover rounded-full '  />
       </div>
       
       <h1 className='text-[17px]  font-semibold ' > CCCCC </h1>
       <h2 className='text-[15px]  font-semibold ' > Micheal J </h2>
       
       <p className='px-[5%]' >
       unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>
       </div>
                 </SwiperSlide>

            

         
        </Swiper>








</div>


    </div>
  )
}

export default TwelfthPage