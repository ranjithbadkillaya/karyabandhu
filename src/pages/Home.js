import React from 'react'
import Navbar from '../component/Homepage/Navbar'
import Header from '../component/Homepage/Header'
import Herosection from '../component/Homepage/Herosection'
import Howitworks from '../component/Homepage/Howitworks'
import Footer from '../component/Homepage/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Herosection/>
      <Howitworks/>
      <Footer/>
    </div>
  )
}

export default Home
