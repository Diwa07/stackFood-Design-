import React from 'react'
import img from '../../image/thirdscreen.webp'
import img2 from '../../image/thirdscreenb.webp'
const ThirdPage = () => {
  return (
    <div className='h-auto px-[2%] border border-[green] mb-[5%] ' >
        <div className='flex flex-col justify-center text-center px-[4%] ' >
            <h1>
            How Does StackFood Work?
            </h1>

            <p>
            StackFood is designed to make your business more flexible and cost effective across all users. So you can ensure successful order delivery each time.
            </p>

 <div className='py-9 text-[10px]  md:text-[20px] flex  justify-between md:justify-center md:gap-5 border border-[red] ' >
    <button className=' px-2 md:px-5  py-2 md:py-4  rounded-3xl bg-[#FF8B2E]' >Order Accepted Resturent</button>
    <button className=' px-2 md:px-5  py-2 md:py-4  rounded-3xl bg-[#FF8B2E]' >Order Accepted Resturent</button>

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