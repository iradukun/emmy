import React from 'react'

const BrandShow = () => {
  return (
    <div className='w-full h-[50vh] bg-cover flex flex-col items-center justify-center gap-4 px-[28rem]' style={{backgroundImage: "url('/assets/images/cta-bg.jpg')"}}>
      <span className='text-white font-black uppercase text-4xl'>wanna promote your brand ?</span>
      <p className='text-white font-["poppins"] text-center font-medium leading-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
      <button className='text-white uppercase w-40 h-10 bg-[green] cursor-pointer'>contact us</button>
    </div>
  )
}

export default BrandShow
