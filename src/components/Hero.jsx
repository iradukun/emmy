import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MovingComponent  from 'react-moving-text';

import Fade from 'react-reveal';
import ShowCase from './ShowCase';

const Hero = () => {

    SwiperCore.use([Pagination, Navigation])

  const slides = ['hero-1.jpg', 'hero-2.jpg'].map((slide, index)=>{
    return (
        <SwiperSlide key={index} className='w-full h-full bg-cover' >
          <Fade>
          <div className='bg-cover h-full w-full' style={{ backgroundImage: `url('/assets/images/${slide}')`}}></div>
          </Fade>
        </SwiperSlide>
        )
  })

  const showCasesData = [
    {name: 'shooting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.', image: 'service-1.jpg'},
    {name: 'videos', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.', image: 'service-2.jpg'},
    {name: 'editing', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.', image: 'service-3.jpg'}
  ]

  const showCases = showCasesData.map((showCaseData, index) =>{
    return <ShowCase key={index} showCaseData={showCaseData} />
  })

  return (
    <div className='relative'>
      <Swiper loop={true} slidesPerView={1} navigation pagination={{clickable: true}} className='w-full h-[90vh] bg-cover'>
        {slides}
      </Swiper>
      <MovingComponent type="fadeInFromBottom" duration="1000ms" delay="20s" direction="alternate" timing="ease" iteration="infinte" fillMode="backwards" className='absolute left-[30rem] z-20 top-[20rem] w-[60rem] flex flex-col items-center justify-center gap-[2rem] bg-[yelow] h-[20rem]'> 
        <span className='text-6xl uppercase font-black text-white'>photograhy studio</span>
        <p className='text-white text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem cum, blanditiis, nam veniam adipisci accusamus dolor nostrum eius dolorum consequatur totam porro sint, distinctio velit. Tempora laboriosam ipsam dolorem dolorum.</p>
        <button className='bg-green-700 text-white py-4 px-4' >Contact Us</button>
      </MovingComponent>
      <div className='w-[75%] h-[28rem] relative translate-x-64 translate-y-[-4rem] z-30 flex items-center justify-center gap-[2rem]'>
        {showCases}
      </div>
    </div>
  )
}

export default Hero
