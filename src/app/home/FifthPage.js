import React from 'react'
import image from'../../image/fifthpage.webp'
import a from '../../image/icona.svg'
import b from '../../image/iconb.svg'

const FifthPage = () => {
  return (
    <div className=' h-auto text-center md:h-screen px-[10%] ' >
<div className='flex flex-col items-center py-[3%] ' >
    <h1 className=' px-[3%] text-[24px] font-semibold py-[3%]' >
    The Smartest Ways to <span className='text-[#FF5823]'> Make Money </span>  with StackFood
    </h1>
    <p className='text-[#646B84]' >
    With StackFood, you get to run your multi restaurant business seamlessly along with making money as you scale with smart revenue streams.
    </p>

</div>

<div className='grid justify-center grid-cols-1 md:grid-cols-2'>

    <div className='flex   flex-col  px-[5%] ' >
 <div className='flex md:flex-row  items-center flex-col py-[10%] gap-4 ' >

 <div className='flex items-end'>
      <img src={a} alt=''/>
    </div>

  <div>
  <h1 className='py-3 font-bold text-[17px]  ' >
    Commission-based Earning
    </h1>
    <div className='text-[#212121]'>
        <li>
        Order-wise (Restaurant-wise) Commission
        </li>
        <li>
        Commission In Delivery Charge
        </li>
    </div>
  </div>
  

 </div>
 <div className='flex flex-col items-center py-[10%]  gap-4 md:flex-row ' >

<div className='flex items-end' >
<img src={b} alt=''/>
   </div>

 <div>
 <h1 className='py-3 font-bold text-[17px]' >
 Subscription-based Earning
   </h1>
   <div>
       <li>
       Restaurant Subscription
       </li>
     
   </div>
 </div>
 

</div>

    </div>
<div className='px-[5%]'>
    <img src={image} alt=''/>
</div>


</div>

    </div>
  )
}

export default FifthPage
