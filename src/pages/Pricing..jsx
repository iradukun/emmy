import React from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import PricingCard from '../components/PricingCard';
import FAQuestions from '../components/FAQuestions';

const Pricing = () => {

  const pricingPlansData = [
    {type: 'Basic', time: 1, price: 99, services: ['up to 30 photos', 'no retouched photos', 'no make-up', 'no stylist assistance']},
    {type: 'Standard', time: 2, price: 199, services: ['up to 30 photos', 'no retouched photos', 'no make-up', 'no stylist assistance']},
    {type: 'Extended', time: 3, price: 299, services: ['up to 30 photos', 'no retouched photos', 'no make-up', 'no stylist assistance']},
    {type: 'Ultimate', time: 4, price: 399, services: ['up to 30 photos', 'no retouched photos', 'no make-up', 'no stylist assistance']},
  ]

  const pricingPlans = pricingPlansData.map((pricingPlanData, index) =>{
    return <PricingCard key={index} data={pricingPlanData} />
  })


  return (
    <div className='w-full h-[160vh] flex flex-col'>
      <div className='w-full h-[10rem] flex items-center justify-start px-[10rem] '>
        <div className='flex items-center justify-center '>
          <CottageIcon fontSize='' className='mr-2' />
          <Link to='/' className='cursor-pointer'>Home</Link>
          <KeyboardArrowRightIcon fontSize='' />
          <span className='text-gray-500'>Pricing</span>
        </div>
      </div>
      <div className='h-[80vh] py-16 flex flex-col items-center justify-between gap-[2rem] bg-[lue]'>
        <div className='w-[30%] h-fit mt-4 flex flex-col items-center justify-center gap-[1rem]'>
          <span className='text-2xl font-black uppercase font-["Quantico"] '>service and optimal price</span>
          <p className='text-gray-500 text-sm  text-center leading-snug font-sans tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        
        <div className='flex w-full h-[25rem] items-center justify-center gap-[2rem]'>
          {pricingPlans}
        </div>
      </div>
      <FAQuestions />
    </div>
  )
}

export default Pricing
