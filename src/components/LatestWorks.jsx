import React, { useState } from 'react'
import LatestWork from './latestWork'

const LatestWorks = () => {
  const [latestWorksData, setLatestWorksData] = useState([
    { type: 'fashion', active: false, image: 'pf-1.jpg' },
    { type: 'lifestyle', active: false, image: 'pf-2.jpg' },
    { type: 'Natural', active: false, image: 'pf-3.jpg' },
    { type: 'Wedding', active: false, image: 'pf-4.jpg' },
    { type: 'Videos', active: false, image: 'pf-7.jpg' },
    { type: 'Videos', active: false, image: 'pf-8.jpg' },
    { type: 'Natural', active: false, image: 'pf-9.jpg' },
    { type: 'Wedding', active: false, image: 'pf-10.jpg' },
    { type: 'lifestyle', active: false, image: 'pf-11.jpg' },
    { type: 'fashion', active: false, image: 'pf-12.jpg' },
    { type: 'fashion', active: false, image: 'pf-13.jpg' },
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
    <div className='w-full h-[200vh] flex flex-col items-center '>
        <div className='w-full h-[10rem] bg-[yellow]'></div>
        <div className='gallery'>
            {latestWorks}
        </div>
        <button className='py-4 mt-4 px-8 text-white bg-black uppercase '>Load more</button>
    </div>
  )
}

export default LatestWorks
