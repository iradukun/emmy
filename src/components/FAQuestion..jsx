import React from 'react'

const FAQuestion = (props) => {
  const { faQuestionData } = props;

  return (
    <div className='w-[40rem] h-[20rem] flex flex-col items-center justify-center gap-8 p-[2rem]'>
      <div className='w-full h-[1rem] flex gap-4 justify-start'>
        <span className='px-2 py-4 text-sm bg-[green] text-white flex items-center justify-center'>0{faQuestionData.id}</span>
        <span className='text-lg font-black'>{faQuestionData.name}</span>
      </div>
      <p className='font-["poppins"] text-sm'>{faQuestionData.description}</p>
    </div>
  )
}

export default FAQuestion
