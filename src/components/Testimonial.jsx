import React from 'react'

const Testimonial = (props) => {
  const { data } = props;

  return (
    <div className='w-[20rem] h-[13rem] bg-white border-t-4 relative flex flex-col items-center justify-center'>
      <div className='w-8 h-8 bg-[red] absolute top-[-1.5rem] left-0 '></div>
      <div className='w-full h-1/2 flex items-center justify-start gap-[2rem] '>
        <img src={`/assets/images/${data.imgSrc}`} className='w-20 h-20 rounded-full' alt="testimony_donor" />
        <div className='flex flex-col items-start justify-center gap-[.2rem]'>
            <span className='text-sm uppercase font-bold'>{data.name}</span>
            <span className='text-gray-500 text-sm font-["poppins"]'>{data.instagram_userName}</span>
        </div>
      </div>
      <div className='w-full h-1/2 flex items-center justify-center '>
        <p className='text-gray-700 text-sm leading-6 tracking-4 font-["poppins"]'>{data.testimony}</p>
      </div>
    </div>
  )
}

export default Testimonial
