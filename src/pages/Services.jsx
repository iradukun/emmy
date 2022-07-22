import React from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import ShowCase from '../components/ShowCase';
import FAQuestions from '../components/FAQuestions';


const Services = () => {

  const showCasesData = [
    {name: 'shooting', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.', image: 'service-1.jpg'},
    {name: 'videos', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.', image: 'service-2.jpg'},
    {name: 'editing', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua. Quis ipsum suspendisse ultrices gravida.', image: 'service-3.jpg'}
  ]

  const showCases = showCasesData.map((showCaseData, index) =>{
    return <ShowCase key={index} showCaseData={showCaseData} />
  })

  return (
     <div className='w-full h-[130vh] flex flex-col items-center '>

      <div className='w-full h-[10rem] flex items-center justify-start px-[10rem] '>
        <div className='flex items-center justify-center '>
          <CottageIcon fontSize='' className='mr-2' />
          <Link to='/' className='cursor-pointer'>Home</Link>
          <KeyboardArrowRightIcon fontSize='' />
          <span className='text-gray-500'>Services</span>
        </div>
      </div>

      <div className='w-[75%] h-[28rem] mb-20 z-30 flex items-center justify-center gap-[2rem]'>
        {showCases}
      </div>

      <FAQuestions />
    </div>
  )
}

export default Services
