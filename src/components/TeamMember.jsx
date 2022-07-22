import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import React from 'react'

const TeamMember = (props) => {
  const { data } = props;

  return (
    <div className='h-full w-[20rem] flex flex-col bg-[#f8f9fa]'>
      <img src={`/assets/images/${data.imgSrc}`} className='w-full h-[70%] object-cover' alt="" />
      <div className='w-full h-[30%] flex flex-col items-center justify-center gap-[.75rem] '>
        <div className='flex flex-col'>
            <span className='text-center text-[1rem] uppercase font-black'>{data.name}</span>
            <span className='text-center text-sm font-["poppins"] text-[green]'>{data.role}</span>
        </div>
        <div className='w-full h-[2rem] flex items-center justify-center gap-[1rem]'>
            {data.socialMediaUrls.map((socialmediaUrl, index)=>{
                if(socialmediaUrl.includes('facebook')) {
                    return <Facebook className='text-gray-500' sx={{fontSize: 16}} />
                }else if (socialmediaUrl.includes('instagram')){
                    return <Instagram className='text-gray-500' sx={{fontSize: 16}} />
                }else if(socialmediaUrl.includes('twitter')){
                    return <Twitter className='text-gray-500' sx={{fontSize: 16}} />
                }else{
                    return <YouTube className='text-gray-500' sx={{fontSize: 16}} />
                }
            })}
        </div>
      </div>
    </div>
  )
}

export default TeamMember
