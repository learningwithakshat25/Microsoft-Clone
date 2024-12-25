import React from 'react'
import Nav from './Component/Nav'
import Hero from './Component/Hero'
// import Hero_card from './Component/Hero_card'
import Forth from './Component/forth'
import Fifth from './Component/Fifth'
import Sixth from './Component/Sixth'
import Seventh from './Component/Seventh'
import Footer from './Component/Footer'


const App = () => {
  return (
    <div className='container mx-auto w-screen flex flex-col gap-8'>
      <Nav/>
      <Hero/>
      {/* <Hero_card/> */}
      <Forth/>
      <Fifth/>
      <Sixth/>
      <Seventh/>
      <Footer/>

    </div>
  )
}

export default App