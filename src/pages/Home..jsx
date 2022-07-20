import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MovingComponent  from 'react-moving-text';

import ''

const Home = () => {

  SwiperCore.use([Pagination, Navigation])

  const slides = ['hero-1.jpg', 'hero-2.jpg'].map(slide=>{
    return (
        <SwiperSlide className='w-full h-full bg-cover' >
          <div className='bg-cover h-full w-full' style={{ backgroundImage: `url('/assets/images/${slide}')`}}></div>
        </SwiperSlide>
        )
  })

  return (
    <div className='w-full h-fit overflow-hidden'>
      <Swiper loop={true} slidesPerView={1} navigation pagination={{clickable: true}} className='w-full h-[90vh] bg-cover'>
        {slides}
      </Swiper>
      <MovingComponent type="fadeInFromBottom" duration="1000ms" delay="20s" direction="alternate" timing="ease" iteration="infinte" fillMode="backwards" className='absolute left-[30rem] z-20 top-[25rem] w-[60rem] flex flex-col items-center justify-center gap-[2rem] bg-[yelow] h-[20rem]'> 
        <span className='text-6xl uppercase font-black text-white'>photograhy studio</span>
        <p className='text-white text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem cum, blanditiis, nam veniam adipisci accusamus dolor nostrum eius dolorum consequatur totam porro sint, distinctio velit. Tempora laboriosam ipsam dolorem dolorum.</p>
        <button className='bg-green-700 text-white py-4 px-4' >Contact Us</button>
      </MovingComponent>
    </div>
  )
}

export default Home
