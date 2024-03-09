import React from 'react'
import img from '../../image/thirdscreen.webp'
import img2 from '../../image/thirdscreenb.webp'
import ellipse from "../../image/Ellipse-2218.png";
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
        <div className='py-[4%]   px-[3%]  ' >
             {/* mobile */}
            <div className= 'relative flex justify-center md:hidden ' >

            <img src={img} alt='' className='h-[30rem]' />
            <div className='absolute bottom-0 flex h-full w-full  border border-[green] left-0 -z-10'> 
         
   
<div className='absolute top-[9%] left-[27%]' >

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" viewBox="0 0 66 113" fill="none"><path class="mbl_down_path" d="M66 1H11C5.47715 1 1 5.47715 1 11V113" stroke="#E55D28" stroke-dasharray="6 6"></path></svg>

</div>



<div className='absolute right-[2%] top-[10%] ' >

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="370" viewBox="0 0 38 298" fill="none"><path class="mbl_down_path" d="M0 297H27C32.5228 297 37 292.523 37 287V11C37 5.47716 32.5228 1 27 1H9.67045" stroke="#E55D28" stroke-dasharray="6 6"></path></svg>
</div>

 <div className='absolute bottom-[30%] left-[50%] ' >
 <svg xmlns="http://www.w3.org/2000/svg" width="150" height="55" viewBox="0 0 100 34" fill="none">
    <path className="side_path" d="M0 1H56C61.5228 1 66 5.47715 66 11V30.5" stroke="#E55D28" stroke-dasharray="6 6"></path>
  </svg>
 </div>




</div>





            </div>

 {/* other  */}

      <div  className='relative py-14 max-md:hidden' >


<div className='flex justify-center w-fit'>
<img src={img2} alt='' className='lg:h-[80%] lg:w-[80%]' /> 
</div>
<div className='absolute top-0 flex justify-center w-full ' >
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="66" viewBox="0 0 600 66" fill="none">
              <path style={{ 
          strokeWidth: 1,
          strokeDasharray: '6 6',
          animation: 'dashSvg 30s linear infinite'
        }} d="M1 56V11C1 5.47715 5.47715 1 11 1H493C498.523 1 503 5.47715 503 11V65.5" stroke="#E55D28" stroke-dasharray="6 6"></path>
            </svg>
</div>

<div className='absolute bottom-0 right-0 ' >
<svg xmlns="http://www.w3.org/2000/svg" width="550" height="355" viewBox="0 0 450 300" fill="none" >
  <path className="side_path" d="M193 1H392C397.523 1 402 5.47715 402 11V168C402 173.523 397.523 178 392 178H0" stroke="#E55D28" strokeDasharray="6 6"></path>
</svg>
</div>
<div className='absolute bottom-0 left-[15%]' >
           
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 221 200" fill="none"><path class="down_path" style={{ 
          strokeWidth: 1,
          strokeDasharray: '6 6',
          animation: 'dashSvgUp 30s linear infinite'
        }} d="M1 0V97C1 102.523 5.47715 107 11 107H220.5" stroke="#E55D28" stroke-dasharray="6 6"></path></svg>


</div>



      </div>
        </div>

     
 
            

    </div>
  )
}

export default ThirdPage