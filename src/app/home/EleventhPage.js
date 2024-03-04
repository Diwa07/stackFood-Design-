import React from 'react'
import support from '../../image/support.webp'
import documentation from '../../image/documantation.webp'
import FAQs from '../../image/faqs.webp'
import Tutorials from '../../image/tutorials.webp'


const EleventhPage = () => {
  return (
    <div className='h-screen px-[10%] ' >
    <div className='flex flex-col items-center'>
        <h1 className='py-5 text-[24px] font-bold ' >
        Supporting Your Success: We're Here to Help and Support You!
        </h1>
        <p className='py-8' >
        We’re here for you every step of the way. So count on us as we ensure your success and satisfaction.
        </p>
        </div>
        
<div className='h-[15rem] grid grid-cols-4  w-full  ' >
<div className='p-5 ' >
    <div className='h-full rounded-xl ' >
       <img src={support} alt='' className='h-full rounded-xl'/> 

    </div>
    <div className='h-[3rem]       px-5 ' >
        <div className='bg-[white] border border-[black] h-full rounded-xl  flex justify-center items-center  w-full  '>Support</div>
    </div>

</div>


<div className='p-5 ' >
    <figure className='bg-[#808080] rounded-xl h-full ' >
    <img src={documentation} alt='' className='h-full rounded-xl'/> 

    </figure>
    <div className='h-[3rem]   px-5 ' >
        <figcaption className='bg-[white] border border-[black] h-full rounded-xl  flex justify-center items-center  w-full'>
            Documentataion
        </figcaption>
    </div>

</div>


<div className='p-5 ' >
    <figure className='bg-[#808080] rounded-xl h-full ' >
    <img src={FAQs} alt='' className='h-full rounded-xl'/> 
        

    </figure>
    <div className='h-[3rem]   px-5 ' >
        <figcaption className='bg-[white] border border-[black] h-full rounded-xl  flex justify-center items-center  w-full'>FAQs</figcaption>
    </div>

</div>



<div className='p-5 ' >
    <figure className='bg-[#808080] rounded-xl h-full ' >
    <img src={Tutorials} alt='' className='h-full rounded-xl'/> 

    </figure>
    <div className='h-[3rem]   px-5 ' >
        <figcaption className='bg-[white] border border-[black] h-full rounded-xl  flex justify-center items-center  w-full'>Tutorials</figcaption>
    </div>

</div>

</div>



    </div>
  )
}

export default EleventhPage