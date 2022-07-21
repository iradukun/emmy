import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import LatestWorks from '../components/LatestWorks'


const Home = () => {
  return (
    <div className='w-full h-fit overflow-hidden'>
      <Hero />
      <Categories />
      <LatestWorks />
      <Footer />
    </div>
  )
}

export default Home
