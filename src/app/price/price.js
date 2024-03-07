import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/footer'
import PricingPage from './PricingPage'
import SecondPage from './secondPage'
import Promo from '../components/promo'
import Thirdppage from './Thirdppage'

const Price = () => {
  return (
    <div>
        <Nav/>
        <PricingPage/>
        <SecondPage/> 
        <Thirdppage/>
          <Footer/>
    </div>
  )
}

export default Price