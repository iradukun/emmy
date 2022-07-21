import React, { useState } from 'react'
import LatestWork from './latestWork'

const LatestWorks = () => {
  const [latestWorksData, setLatestWorksData] = useState([
    { type: 'fashion', active: false, image: 'hero-1.jpg' },
    { type: 'lifestyle', active: false, image: 'logo.png' },
    { type: 'Natural', active: false, image: 'hero-2.jpg' },
    { type: 'Wedding', active: false, image: 'service-1.jpg' },
    { type: 'Videos', active: false, image: 'service-2.jpg' },
    { type: 'Videos', active: false, image: 'service-2.jpg' },
    { type: 'Natural', active: false, image: 'service-2.jpg' },
    { type: 'Wedding', active: false, image: 'service-1.jpg' },
    { type: 'lifestyle', active: false, image: 'logo.png' },
    { type: 'fashion', active: false, image: '' },
    { type: 'fashion', active: false, image: 'hero-2' },
  ])

  const handleActive = (id) =>{
    setLatestWorksData(prevWorksData=>{
        return prevWorksData.map(prevWorkData=>{
            return prevWorkData.image === id ? {...prevWorkData, active: true} : prevWorkData;
        })
    })
  }


  const handleInActive = (id) =>{
    setLatestWorksData(prevWorksData=>{
        return prevWorksData.map(prevWorkData=>{
            return prevWorkData.image === id ? { ...prevWorkData, active: false } : prevWorkData;
        })
    })
  }
  const latestWorks = latestWorksData.map((latestWorkData, index) =>{
    return <LatestWork data={latestWorkData} key={index} handleActive={handleActive} handleInActive={handleInActive} />
  })


  return (
    <div className='w-full h-[150vh] flex flex-col items-center '>
        <div className='w-full h-[10rem] bg-[blue]'></div>
        <div className='w-full h-[95%] bg-[yellow] flex flex-wrap gap-8 p-8 items-center justify-start'>
            {latestWorks}
        </div>
        <button className='py-4 mt-4 px-8 text-white bg-green-500 '>Load more</button>
    </div>
  )
}

export default LatestWorks
