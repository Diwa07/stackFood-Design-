import React from 'react'
import middle from '../../image/tenmiddle.webp'
import a from '../../image/a.webp'
import b from '../../image/b.webp'
import c from '../../image/c.webp'
import d from '../../image/d.webp'
import e from '../../image/e.webp'





const TenthPage = () => {
  return (
    <div className='flex flex-col items-center h-auto text-center ' >
        <div>
            <h1 className='text-[28px]  font-semibold  px-5 ' >
            Built with Modern Technology for  <span className="text-[#FE5925]  " > Cross-Platform  </span>  Performance
            </h1>
        </div>


         <div className=' w-full h-full flex        py-[5%] ' >

         <div className='flex w-full ' >



         <div className='flex flex-col items-center justify-center w-full h-full mr-[3rem] ' >
            <div className='flex gap-[20%] md:gap-[30%]   ' >
            < img src= {a} alt=' ' className='h-[5rem] md:h-[10rem]  w-[5rem] md:w-[10rem]' />
             <img src= {middle} alt='' className='w-[4rem] h-[4rem] ' />
            < img src= {e} alt=' ' className='h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]' />
            </div>
            
            <div className='flex gap-[60%]' > 

            < img src= {b} alt=' ' className='h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]' />
            < img src= {d} alt=' ' className='h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]' />
            </div>
           
<div className='lg:ml-[15%] ml-[20%]  flex  -mt-[12%] ' >
< img src= {c} alt=' ' className='h-[5rem] md:h-[10rem] w-[5rem] md:w-[10rem]' />
          
</div>

          </div>

         </div>


         </div>

    </div>
  )
}

export default TenthPage