import React from 'react'
import ExploreDemo from './ExploreDemo'
import one from '../../image/one.svg'
import two from '../../image/two.svg'
import three from '../../image/three.svg'
import four from '../../image/four.svg'
import five from '../../image/five.svg'
import six from '../../image/six.svg'

const   EightPage = () => {
  return (
    <>
    <div  className='h-auto px-[10%] py-[2%] text-center ' >
      <div>
        <h1 className='text-[24px] py-7'>
        Want To Make StackFood Your Own? Here’s How

        </h1>
        <div className='h-full lg:flex' >
        <div className='flex flex-col w-full h-full gap-9 ' >
        <div className='flex items-center gap-5' >
          <p className='order-2 lg:order-1' > 
            Purchase StackFood from CodeCanyon

            </p>
            <div className='order-1 lg:order-2' >
              <img src={one} alt=''/>
            </div>
           


          </div>
         

          <div className='flex items-center gap-5' >
          <p className='order-2 lg:order-1' > 
            Purchase StackFood from CodeCanyon

            </p>
            <div className='order-1 lg:order-2' >
              <img src={two} alt=''/>
            </div>
          </div>

          <div className='flex items-center gap-5' >
          <p className='order-2 lg:order-1' > 
            Purchase StackFood from CodeCanyon

            </p>
            <div className='order-1 py-5 lg:py-0 lg:order-2' >
              <img src={three} alt=''/>
            </div>
           


          </div>
          
       

        </div>
        <div className='flex flex-col justify-between w-full h-full gap-9 ' >
   

        <div className='flex items-center gap-5' >

        <div className='order-1 ' >
              <img src={four} alt=''/> 
            </div>

          <p className='order-2' > 
            Purchase StackFood from CodeCanyon

            </p>
         
           


          </div>

     


          <div className='flex items-center gap-5' >

          <div className='order-1 ' >
      <img src={five} alt=''/>
    </div>
    <p className='order-2' >
    Purchase StackFood from CodeCanyon

    </p>
 
   


  </div>

        
  <div className='flex items-center gap-5' >

  <div className='order-1 ' >
      <img src={six} alt=''/>
    </div>
    <p className='order-2' >
    Purchase StackFood from CodeCanyon

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