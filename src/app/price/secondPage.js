import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const SecondPage = () => {




  return (
    <div className='h-auto text-center mb-[4rem] bg-[#FEFDF9]  px-[5%] md:px-[10%] lg:px-[15%] '>
        <div className='flex flex-col items-center justify-center py-9' >
            <h1 className='py-9 text-[25px] font-semibold ' >
            Which License Fits <span className='text-[#FF5823]' >Best For</span>  You?
            </h1>
            <p className='text-[#646b84]' >
            Still confused about which license you need? Choose the one that aligns with your business or project’s needs and will help you escalate in the long run.
            </p>
        </div>


        <div className='grid w-full text-[#1a2e35] text-[15px] grid-cols-1 gap-7 h-fit md:grid-cols-2 ' >
        <div className='flex flex-col items-center p-3 border '  >
      <h2 className='text-[30px] font-semibold  bg-[#FFF6F4] p-3 text-[#FF5722] ' >Regular License Details</h2>
      <ul className='flex flex-col bg-[#FEFEF6]   gap-10 py-9 ' >
          <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /> </div>  Lifetime License Validity</li>
          <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /> </div>  Permitted for 1 Domain</li>
          <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /> </div>  6 months of support</li>
          <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /> </div>  All Premium Features</li>
          <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /> </div>  Lifetime FREE Updates</li>
          <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /> </div>  For Personal Project</li>
          <li className='flex items-center gap-3 '  > <div>     <MdCancel className=' text-[#FF777D]' /> </div>  For Commercial Projects [if end product is paid]</li>
          <li className='flex items-center gap-3 '  > <div>     <MdCancel className=' text-[#FF777D]' /> </div>  Postman Collection for REST API Documentation</li>
          <li className='flex items-center gap-3 '  > <div>     <MdCancel className=' text-[#FF777D]' /> </div>  Admin Panel FREE Installation in cPanel</li>
          <li className='flex items-center gap-3 '  > <div>     <MdCancel className=' text-[#FF777D]' /> </div>  Priority Support</li>
      </ul>
      
      <button className="py-2 md:py-4 text-xs md:text-2xl flex justify-center items-center rounded-3xl border-[2px] border-[#FF922C] gap-1 md:gap-3 px-2 w-max md:px-7 bg-[#FF922C] shadow-[0px_20px_20px_0px_rgba(255,87,34,.3)]">
              Buy Regular License 
            </button>

    </div>


    <div className='flex flex-col items-center p-3 border'  >
      <h2 className='text-[30px] bg-[#EDFFF7] font-semibold p-3 text-[#47CC72] ' >Extended License Details</h2>
      <ul className='flex flex-col gap-10 py-9 ' >
        <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /></div> Lifetime License Validity</li>
        <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /></div> Permitted for 1 Domain</li>
        <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /></div> 6 months of support</li>
        <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /></div> All Premium Features</li>
        <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /></div> Lifetime FREE Updates</li>
        <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /></div> For Personal Project</li>
        <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /></div> For Commercial Projects [if end product is paid]</li>
        <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /></div> Postman Collection for REST API Documentation</li>
        <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /></div> Admin Panel FREE Installation in cPanel [One Time]</li>
        <li className='flex items-center gap-3 '  > <div>     <FaCheckCircle className='text-[#00C077]' /></div> Priority Support</li>
      </ul>

      <button className="py-2 md:py-4 text-xs md:text-2xl flex justify-center items-center rounded-3xl border-[2px] border-[#03C677] gap-1 md:gap-3 px-2 w-max md:px-7 bg-[#03C677] shadow-[0px_20px_20px_0px_rgba(255,87,34,.3)]">
              Buy Extended License 
            </button>

    </div>

        </div>



    </div>
  )
}

export default SecondPage