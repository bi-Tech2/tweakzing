import React from 'react'
import Navbar from "../components/Navbar.jsx"
// import Drag from "../components/Drag.jsx"
import Hero from "../components/Hero.jsx"
import Explore from "../components/Explore.jsx"

export const Home = () => {
  return (
    <div className='bg-black'>
        <Navbar />
        {/* <Drag /> */}
        <Hero />
        <Explore />
        <div className='bown'></div>
    </div>
  )
}

export default Home;