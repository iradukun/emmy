import React from 'react'

const Reason = (props) => {
  const { data } = props
  return (
    <div className='h-auto w-auto flex items-center'>
      <div className='w-[10rem] h-[5rem] bg-white grid place-items-center'>
        <img src={`/assets/images/${data.imgSrc}`} className='w-[45%]' alt="imag" />
      </div>
      <div className='w-auto flex flex-col items-start px-14 b-[red]'>
        <span className='text-xl font-bold uppercase'>{data.title}</span>
        <span className="text-gray-500 text-sm font-['poppins']">{data.description}</span>
      </div>
    </div>
  )
}

export default Reason
