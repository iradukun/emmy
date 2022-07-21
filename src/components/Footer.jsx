import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailInputChange = e =>{
    e.preventDefault();
    setEmail(()=>e.target.value)
  }

  const sendMessageToEmail = e =>{
    e.preventDefault();
    console.log(email);
  }


  return (
    <div className='w-full h-[25rem] mt-[2rem] self-end flex items-start justify-center gap-[2rem] bg-black'>
      <div className='w-[20rem] h-[70%] flex flex-col items-start justify-center p-8 gap-[2rem]'>
        <img src="/assets/images/f-logo.png" alt="" />
        <p className='text-white text-xs leading-snug font-["poppins"] tracking-widest'>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='w-fit h-fit flex items-center justify-center gap-[1rem]'>
          <FacebookIcon className='text-white' />
          <TwitterIcon className='text-white' />
          <YouTubeIcon className='text-white' />
          <InstagramIcon className='text-white' />
        </div>
      </div>
      <div className='w-[22rem] h-[65%] flex flex-col items-start justify-center p-2 gap-[2rem]'>
        <span className='text-white text-xl text-start uppercase font-black'>instagram</span>
        <div className='w-fit h-fit flex gap-[.5rem]'>
          {['insta-1.jpg', 'insta-2.jpg', 'insta-3.jpg'].map(img=>{
              return <img src={`/assets/images/${img}`} alt="img" />
          })}
        </div>
      </div>
      <div className='w-[20rem] h-[70%] flex flex-col items-start justify-center p-8 gap-[2.5rem]'>
        <span className='text-white text-xl text-start uppercase font-black'>Quick links</span>
        <div className='w-full h-fit grid grid-cols-2'>
          {['Home', 'About', 'Contact', 'Gallery', 'Portifolio', 'Services'].map(link=>{
            return <Link to={`/${link}`} className='text-white text-xs leading-snug font-["poppins"] tracking-widest py-2'>{link}</Link>
          })}
        </div>
      </div>
      <div className='w-[22rem] h-[70%] flex flex-col items-start justify-center p-8 gap-[2rem]'>
        <span className='text-white text-xl text-start uppercase font-black'>Subscribe</span>
        <p className='text-white text-xs leading-snug font-["poppins"] tracking-widest'>molor amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <form className='w-[18rem] h-[3rem] relative' onSubmit={sendMessageToEmail}>
          <input type="email" name="email" id="email" className='w-full h-full border-2 bg-transparent text-white outline-none border-[green] p-[1rem] ' autoComplete='off' placeholder='Email' onChange={handleEmailInputChange} />
          <button className='w-[3rem] h-[3rem] absolute flex items-center justify-center bg-[green] right-0 bottom-0 z-10'>
            <SendIcon className='sendIcon text-white block cursor-pointer' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Footer

