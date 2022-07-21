import React from 'react'

const Category = (props) => {
    const { data } = props;
  return (
    <div className='w-[26rem] h-[30rem] bg-[#f8f9fa] flex flex-col p-2'>
      <img src={`assets/images/service-2.jpg`} className='w-full h-[70%]' alt="" />
      <div className='w-full h-[30%] flex flex-col items-center justify-center gap-[1rem] '>
        <span className='text-2xl font-black text-center'>{data.name}</span>
        <span className='text-green-500 text-center'>{data.number} pictures</span>
      </div>
    </div>
  )
}

export default Category
