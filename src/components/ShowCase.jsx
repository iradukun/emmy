import React from 'react'

const ShowCase = (props) => {
  const { showCaseData } = props;

  return (
    <div className='w-[28rem] h-full bg-white flex flex-col gap-[1rem] items-center justify-center py-4 shadow-2xl shadow-[#dbdbdf]' >
      <img src={`/assets/images/${showCaseData.image}`} alt="" />
      <span className='text-3xl font-black uppercase'>{showCaseData.name}</span>
      <p className='text-center text-gray-500 font-sans px-4 self-start '>{showCaseData.content}</p>
    </div>
  )
}

export default ShowCase
