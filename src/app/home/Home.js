import React from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import Footer from '../components/footer'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import Promo from '../components/promo'
import FifthPage from './FifthPage'
import SixthPage from './SixthPage'
import SeventhPage from './seventhPage'
import NinthPage from './NinthPage'
import EightPage from './EightPage'
import TenthPage from './TenthPage'
import EleventhPage from './EleventhPage'
import TwelfthPage from './twelfthPage'

const Home = () => {
  return (
    <div>
        <FirstPage/> <SecondPage/>
        <ThirdPage/>
        <FourthPage/>
        <FifthPage/>
        <SixthPage/>
        <SeventhPage/>
        <EightPage/>
        <NinthPage/>
        <TenthPage/>
        <EleventhPage/>
        <TwelfthPage/>
        <Promo/>
        <Footer/>

    </div>
  )
}

export default Home