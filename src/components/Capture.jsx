import React, { useState } from 'react';
import VideoPopUp from '../components/VideoPopUp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Reason from './Reason';
import { IconButton } from '@mui/material';

const About = () => {

  const [videoPopUp, setVideoPopUp] = useState(false);

  const reasonsData = [
    {imgSrc: 'list-1.png', title: 'professionalism', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'},
    {imgSrc: 'list-2.png', title: 'Individual approach', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'},
    {imgSrc: 'list-3.png', title: 'flexible schedule', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'},
    {imgSrc: 'list-4.png', title: 'experience', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.'},
  ]

  const reasons = reasonsData.map((reasonData, index) =>{
    return <Reason data={reasonData} key={index} />
  })


  const openVideoPopUp = () => {
    setVideoPopUp(true);
  }

  const closeVideoPopUp = () => {
    setVideoPopUp(false);
  }


  return (
     <div className='w-full h-[97vh] bg-red-500 flex'>
      {videoPopUp && <VideoPopUp closePopUp={closeVideoPopUp} />}

        <div className='w-1/2 h-full bg-cover object-cover relative' style={{ backgroundImage: "url('/assets/images/about-pic.jpg')"}}>
          <div className='w-[5rem] h-[5rem] bg-green-500 cursor-pointer rounded-full grid place-items-center absolute right-[-2rem] bottom-96'>
            <IconButton onClick={openVideoPopUp}>
              <PlayArrowIcon className='text-white' fontSize='large' />
            </IconButton>
          </div>
        </div>
        <div className='w-1/2 h-full bg-[#f6f6f6] flex flex-col items-center justify-center gap-[2rem]'>
          <div className='flex flex-col items-start justify-center gap-8 px-12'>
            <div className=''>
              <span className='block text-3xl uppercase font-black'>capturing the moments that</span>
              <span className='block text-3xl uppercase font-black'>captivate your heart</span>
            </div>
            <p className='text-sm font-medium text-gray-500 font-["poppins"]'>Lorem ipsum dolor sit amet, consectetur adipiscing, tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis. All these taglines are owned by their respective owners, and we do not have any copyright on them</p>
          </div>
          <div className='h-auto py-8 w-full flex flex-col items-center justify-center gap-[3rem] pl-12 '>
            {reasons}
          </div>
        </div>
      </div>
  )
}

export default About
     