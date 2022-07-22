import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const VideoPopUp = (props) => {
  const { closePopUp } = props
  return (
    <div className='w-screen h-screen bg-[#000000b7] flex flex-col items-center justify-center fixed top-0 z-50 gap-4'>
        <IconButton className='absolute left-[25.5rem] top-[1rem]' onClick={closePopUp}>
            <CloseIcon className='text-white cursor-pointer ' />
        </IconButton>

      <iframe  className='w-[48%] h-[50%] bg-black' src="https://www.youtube.com/embed/LqYIKYEnX7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default VideoPopUp
