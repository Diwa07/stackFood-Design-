import React from 'react'
 import logo from '../../image/logo.svg'

const Footer = () => {
  return (
    <div className='flex flex-col justify-end text-center text-white lg-h-auto lg:h-screen' >
<div className='h-[90%] p-[5%]  bg-[#212121] rounded-tl-[2rem] rounded-tr-[2rem] ' >
    <div className='bg-[#383838] h-full grid mt-3    grid-cols-1 md:grid-cols-2   lg:grid-cols-4 rounded-xl p-[1%] ' >

       
    <div className=' px-[5%] '>
       <div className='py-5 text-2xl ' >
        <img src={logo} alt=''/>
       </div>
<p className='text-center' >
StackFood is an online multi restaurant food ordering & delivery solution built to connect restaurants and customers in a single platform. Purchase StackFood & get access to the complete source code with documentation.

Facebook-f
 Linkedin-in
  Youtube

</p>


        </div>

    
<div className=' px-[5%] text-center   '>
<h1 className='py-5 text-2xl ' >
Company
</h1> <ol className='flex flex-col gap-7' >
<li>
About Us
</li>

 <li >Contact Us</li>

 <li> Privacy policy</li>

 <li>Service & Support Policy </li>
 <li>
Cookie Policy </li>

<li>Blog</li>
</ol>

        </div>

        <div className=' px-[5%]  text-center '>

<h1 className='py-5 text-2xl ' >

    Quicks Links
</h1>
<ol className='flex flex-col gap-7' >
<li>Demo </li>

<li> Documentation </li>

<li>Community</li>

<li>Support</li>

<li>FAQs
</li>
</ol>
</div>



<div className=' px-[5%] text-center '>
<ol className='flex flex-col gap-7' >
<h1 className='py-5 text-2xl ' >
 Contact Us

</h1>
<li>+8801325887797 </li>
<li>support@6amtech.com </li>
<li>Support Ticket</li>
</ol>
</div>



    </div>

 <div className='flex  md:flex-row flex-col py-7  md:h-[4rem]  justify-around items-center text-white ' >
<h1 className='order-2 py-4 md:order-1 ' > Copyright ©2024 StackFood. All Rights Reserved</h1>

<h1 className='order-1 py-4 md:order-2' >Proudly Developed By
6amtech White Logo</h1>
 </div>
</div>

    </div>
  )
}

export default Footer