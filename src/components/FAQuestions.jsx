import React from 'react'
import FAQuestion from './FAQuestion.'

const FAQuestions = () => {

  const faQuestionsData = [
    {id: 1, name: 'FILMING AND EDITING', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.'},
    {id: 2, name: 'ENGAGEMENT PHOTOGRAPHY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.'},
    {id: 3, name: 'COMERCIAL PHOTOGRAPHY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.'},
    {id: 4, name: 'SOCIAL MEDIA PHOTOGRAPHY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.'},
    {id: 5, name: 'EVENT PHOTOGRAPHY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.'},
    {id: 6, name: 'PERSONAL PHOTOGRAPHY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.'},
  ]

  const faQuestions = faQuestionsData.map((faQuestionData, index) =>{
    return <FAQuestion key={index} faQuestionData={faQuestionData} />
  })

  return (
    <div className='w-full h-[60vh] flex flex-col items-center justify-center gap-16'>
      <span className='text-3xl text-center uppercase font-black'>frequently asked questions</span>
      <div className='w-full h-[20rem] grid grid-cols-2 grid-rows-3 gap-x-0 gap-y-16 place-items-center px-32'>
        {faQuestions}
      </div>
    </div>
  )
}

export default FAQuestions
