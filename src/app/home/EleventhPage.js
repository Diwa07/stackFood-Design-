import React from 'react'
import support from '../../image/support.webp'
import documentation from '../../image/documantation.webp'
import FAQs from '../../image/faqs.webp'
import Tutorials from '../../image/tutorials.webp'


const EleventhPage = () => {
  return (
    <div className='md:h-screen   h-auto px-[10%] ' >
    <div className='flex flex-col items-center text-center'>
        <h1 className='py-5 text-[24px] font-bold ' >
        Supporting Your Success: We're Here to Help and <span className='text-[#FE5925]' > Support You! </span> 
        </h1>
        <p className='py-8 text-[#848889] ' >
        We’re here for you every step of the way. So count on us as we ensure your success and satisfaction.
        </p>
        </div>
        
<div className=' h-auto  lg:h-[15rem]  font-semibold text-[17px] grid gap-7 sm:grid-cols-2 grid-cols-1 md:grid-cols-4  w-full  ' >
    
<div className='flex flex-col items-center gap-5 p-5 border ' >
    <div className='h-full rounded-xl ' >
       <img src={support} alt='' className='h-full rounded-xl'/> 

    </div>
    <div className='h-[3rem]  w-full     ' >
        <button className='bg-[white] border px-4 border-[#FFBB70] h-full rounded-xl  flex justify-center items-center  w-full  '>Support</button>
    </div>

</div>

<div className='flex flex-col items-center gap-5 p-5 border ' >
    <div className='h-full rounded-xl ' >
       <img src={documentation} alt='' className='h-full rounded-xl'/> 

    </div>
    <div className='h-[3rem]  w-full     ' >
        <button className='bg-[white] border px-4 border-[#FFBB70] h-full rounded-xl  flex justify-center items-center  w-full  '>Documantation</button>
    </div>

</div>



<div className='flex flex-col items-center gap-5 p-5 border ' >
    <div className='h-full rounded-xl ' >
       <img src={FAQs} alt='' className='h-full rounded-xl'/> 

    </div>
    <div className='h-[3rem]   w-full    ' >
        <button className='bg-[white] border px-4 border-[#FFBB70] h-full rounded-xl  flex justify-center items-center  w-full  '>FAQs</button>
    </div>

</div>




<div className='flex flex-col items-center gap-5 p-5 border ' >
    <div className='h-full rounded-xl ' >
       <img src={Tutorials} alt='' className='h-full rounded-xl'/> 

    </div>
    <div className='h-[3rem]   w-full     ' >
        <button className='bg-[white] border  px-4 border-[#FFBB70] h-full rounded-xl  flex justify-center items-center  w-full  '>Tutorials</button>
    </div>

</div>










</div>



    </div>
  )
}

export default EleventhPage