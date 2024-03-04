import React from 'react'
import image from'../../image/fifthpage.webp'

const FifthPage = () => {
  return (
    <div className='h-screen px-[10%] ' >
<div className='flex flex-col items-center py-[3%] ' >
    <h1 className='py-[3%]' >
    The Smartest Ways to Make Money with StackFood
    </h1>
    <p>
    With StackFood, you get to run your multi restaurant business seamlessly along with making money as you scale with smart revenue streams.
    </p>

</div>

<div className='grid justify-center grid-cols-1 md:grid-cols-2'>

    <div className='flex   flex-col  px-[5%] ' >
 <div className='flex py-[10%] gap-4 ' >

 <div className='flex items-end'>
        hello
    </div>

  <div>
  <h1 className='py-3 font-bold text-[17px]' >
    Commission-based Earning
    </h1>
    <div>
        <li>
        Order-wise (Restaurant-wise) Commission
        </li>
        <li>
        Commission In Delivery Charge
        </li>
    </div>
  </div>
  

 </div>
 <div className='flex gap-4 ' >

<div className='flex items-end' >
       hello
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
