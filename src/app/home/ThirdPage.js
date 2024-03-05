import React from 'react'
import img from '../../image/thirdscreen.webp'
import img2 from '../../image/thirdscreenb.webp'
const ThirdPage = () => {
  return (
    <div className='h-auto px-[2%]  mb-[5%] ' >
        <div className='flex flex-col justify-center text-center px-[4%] ' >
            <h1 className='text-[27px] font-semibold py-7 ' >
            How Does StackFood  <span className='text-[#FE5926]'> Work? </span> 
            </h1>

            <p className='text-[#646b84]' >
            StackFood is designed to make your business more flexible and cost effective across all users. So you can ensure successful order delivery each time.
            </p>

 <div className='py-9 text-[13px]  md:text-[20px]  flex   gap-5 justify-center md:gap-5  ' >
    <button className=' px-2 md:px-5  py-2 md:py-4  text-[white] font-bold rounded-3xl bg-[#FF8B2E]' >Order Accepted by Restaurant</button>
    <button className=' px-2 md:px-5  py-2 md:py-4 text-[#646b84] rounded-3xl bg-[#FFFFFF]' >Order Accepted by Deliveryman</button>

 </div>


        </div>
        <div className='py-[4%] px-[3%]  ' >
            <img src={img} alt='' className= 'md:hidden'/>
            <img src={img2} alt='' className='max-md:hidden' /> 
        </div>



    </div>
  )
}

export default ThirdPage