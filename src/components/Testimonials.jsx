import React from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
  const testimonialsData = [
    {imgSrc: 'ta-1.jpg', name: 'andrew filder', instagram_userName: '@filder_muko', testimony: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {imgSrc: 'ta-2.jpg', name: 'David guetta', instagram_userName: '@filder_muko', testimony: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {imgSrc: 'ta-3.jpg', name: 'bebe rexha', instagram_userName: '@filder_muko', testimony: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {imgSrc: 'ta-4.jpg', name: 'adam levine', instagram_userName: '@filder_muko', testimony: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  ]

  const testimonials = testimonialsData.map((testimonialData, index) =>{
    return <Testimonial key={index} data={testimonialData} />
  })

  return (
    <div className='w-full h-[75vh]  flex flex-col items-center justify-center gap-16'>
      <div className='w-full h-auto px-[35rem] flex flex-col items-center justify-center gap-4'>
        <span className='text-4xl font-black uppercase'>what clients say ?</span>
        <p className='text-center text-sm font-["poppins"] leading-6 tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      </div>
      <div className='w-full h-[40%] flex items-center justify-center gap-[2rem]'>
        { testimonials }
      </div>
    </div>
  )
}

export default Testimonials
