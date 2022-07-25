import React from 'react'
import CottageIcon from '@mui/icons-material/Cottage';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import Capture from '../components/Capture'
import Team from '../components/Team';
import BrandShow from '../components/BrandShow';
import Testimonials from '../components/Testimonials';

const About = () => {
  return (
   <div className='w-full h-[320vh] flex flex-col items-center transition-all duration-500'>

      <div className='w-full h-[10rem] flex items-center justify-start px-[10rem] '>
        <div className='flex items-center justify-center '>
          <CottageIcon fontSize='' className='mr-2' />
          <Link to='/' className='cursor-pointer'>Home</Link>
          <KeyboardArrowRightIcon fontSize='' />
          <span className='text-gray-500'>About</span>
        </div>
      </div>

      <Capture />

      <Team />

      <BrandShow />

      <Testimonials />
    </div>
  )
}

export default About
