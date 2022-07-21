import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from './Category';
import '../App.css';

const Categories = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    delay: 2,
  }

  const categoriesData = [
    { name: 'Natural', image: '', number: 325 },
    { name: 'Animal', image: '', number: 125 },
    { name: 'Portrait', image: '', number: 540 },
    { name: 'Natural', image: '', number: 305 },
  ]

  const categories = categoriesData.map((categoryData, index) =>{
    return <Category key={index} data={categoryData} />
  })

  return (
      <div className='w-full h-[50rem] bg-[blu] flex flex-col items-center justify-center gap-4 '>
        <div className='w-full h-[20%] flex items-center justify-around gap-[15rem]'>
          <div className='w-[30rem] flex flex-col items-start justify-center gap-4'>
            <span className='font-black text-4xl uppercase'>Categories</span>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <button className='px-8 py-3 text-white bg-[green] uppercase'>View All</button>
        </div>

        <Slider {...settings} className='w-[72%] h-[60%] overflow-visible'>
          {categories}
        </Slider>
    </div>
  )
}

export default Categories
