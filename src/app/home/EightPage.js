import React from 'react'
import ExploreDemo from './ExploreDemo'
import one from '../../image/one.svg'
import two from '../../image/two.svg'
import three from '../../image/three.svg'
import four from '../../image/four.svg'
import five from '../../image/five.svg'
import six from '../../image/six.svg'
import  img from '../../image/eightpage.webp'

const   EightPage = () => {
  return (
    <> 
    <div  className='h-auto px-[10%] py-[2%] text-center ' > 
      <div>
        <h1 className='text-[24px] py-7 font-semibold '>
        Want To Make <span className='text-[#FF5823]' > StackFood Your Own? </span>  Here’s How

        </h1>
        <div className='h-full text-[#1a2e35] text-[21px] lg:flex' >
        <div className='flex flex-col items-end w-full h-full gap-9 ' >
        <div className='flex flex-col items-center gap-5 lg:flex-row' >
          <p className='order-2 lg:order-1' > 
            Purchase StackFood from CodeCanyon

            </p>
            <div className='order-1 lg:order-2' >
              <img src={one} alt=''/>
            </div>
           


          </div>
         

          <div className='flex flex-col items-center gap-5 lg:flex-row' >
          <p className='order-2 lg:order-1' > 
          Install & configure StackFood to your server

            </p>
            <div className='order-1 lg:order-2' >
              <img src={two} alt=''/>
            </div>
          </div>

          <div className='flex flex-col items-center gap-5 lg:flex-row' >
          <p className='order-2 lg:order-1' > 
          Set up the admin panel & launch your website

            </p>
            <div className='order-1 py-5 lg:py-0 lg:order-2' >
              <img src={three} alt=''/>
            </div>
           


          </div>
          
       

        </div>

<div className='items-center justify-center hidden  lg:flex' >
<div className='relative' >
  <img src={img} alt=''/>
 
</div>
<div className='absolute ' >
  {/* <p>helo</p> */}


</div>
</div>

        <div className='flex flex-col justify-between w-full h-full gap-9 ' >
   

        <div className='flex flex-col items-center gap-5 lg:flex-row' >

        <div className='order-1 ' >
              <img src={four} alt=''/> 
            </div>

          <p className='order-2' > 
          Publish your app to App Store & Google Play Store

            </p>
         
           


          </div>



     


          <div className='flex flex-col items-center gap-5 lg:flex-row' >

          <div className='order-1 ' >
      <img src={five} alt=''/>
    </div>
    <p className='order-2' >
    Invite restaurant owners to register & enlist their foods

    </p>
 
   


  </div>

        
  <div className='flex flex-col items-center gap-5 lg:flex-row' >

  <div className='order-1 ' >
      <img src={six} alt=''/>
    </div>
    <p className='order-2' >
    Start selling food & make profits from your business

    </p>
 
   


  </div>
          
       

        </div>


        </div>


      </div>
    </div>
    <ExploreDemo/>
    
    </>
  )
}

export default   EightPage