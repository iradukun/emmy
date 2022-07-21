import React, { useState } from 'react'
import LatestWork from './latestWork';
import CloseIcon from '@mui/icons-material/Close';
import Filter from './Filter';

const LatestWorks = () => {
  const [latestWorksData, setLatestWorksData] = useState([
    { type: 'fashion', active: false, image: 'pf-1.jpg', modalOpen: false },
    { type: 'Wedding', active: false, image: 'pf-4.jpg', modalOpen: false },
    { type: 'Natural', active: false, image: 'pf-3.jpg', modalOpen: false },
    { type: 'lifestyle', active: false, image: 'pf-2.jpg', modalOpen: false },
    { type: 'Videos', active: false, image: 'pf-7.jpg', modalOpen: false },
    { type: 'Videos', active: false, image: 'pf-8.jpg', modalOpen: false },
    { type: 'Natural', active: false, image: 'pf-9.jpg', modalOpen: false },
    { type: 'Wedding', active: false, image: 'pf-10.jpg', modalOpen: false },
    { type: 'lifestyle', active: false, image: 'pf-11.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'pf-12.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'pf-13.jpg', modalOpen: false },
  ])

  const [filtered, setFiltered] = useState([
    { type: 'fashion', active: false, image: 'pf-1.jpg', modalOpen: false },
    { type: 'Wedding', active: false, image: 'pf-4.jpg', modalOpen: false },
    { type: 'Natural', active: false, image: 'pf-3.jpg', modalOpen: false },
    { type: 'lifestyle', active: false, image: 'pf-2.jpg', modalOpen: false },
    { type: 'Videos', active: false, image: 'pf-7.jpg', modalOpen: false },
    { type: 'Videos', active: false, image: 'pf-8.jpg', modalOpen: false },
    { type: 'Natural', active: false, image: 'pf-9.jpg', modalOpen: false },
    { type: 'Wedding', active: false, image: 'pf-10.jpg', modalOpen: false },
    { type: 'lifestyle', active: false, image: 'pf-11.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'service-1.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'pf-12.jpg', modalOpen: false },
    { type: 'fashion', active: false, image: 'pf-13.jpg', modalOpen: false },
  ])
  const [activeImageType, setActiveImageType] = useState('All')

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

  const openModal= (id) =>{
    setLatestWorksData(prevWorksData=>{
        return prevWorksData.map(prevWorkData=>{
            return prevWorkData.image === id ? {...prevWorkData, modalOpen: true} : prevWorkData;
        })
    })
  }

  const closeModal = (id) =>{
    setLatestWorksData(prevWorksData=>{
        return prevWorksData.map(prevWorkData=>{
          console.log(id)
            return prevWorkData.image === id ? { ...prevWorkData, modalOpen: false } : prevWorkData;
        })
    })
  }

  const latestWorks = latestWorksData.map((latestWorkData, index) =>{
    return <LatestWork data={latestWorkData} key={index} handleActive={handleActive} openModal={openModal} handleInActive={handleInActive} />
  })


  return (
    <div className='w-full h-fit flex flex-col items-center '>
        <div className='w-full h-[10rem] bg-[yellow] flex flex-col items-center justify-center'>
          <span className='latestSpan text-4xl font-black uppercase'>our latest works</span>
          <Filter />
        </div>
        <div className='gallery'>
            {latestWorks}
        </div>
          {latestWorksData.map((latestWorkData, index) =>{
            return latestWorkData.modalOpen && <div key={index} className='w-full h-[100vh] fixed top-0 left-0 right-0 z-40 flex items-start pt-32 justify-center gap-8 bg-[#000000b1]'>
              <img src={`/assets/images/${latestWorkData.image}`} alt="" />
              <CloseIcon onClick={()=>closeModal(latestWorkData.image)} className='text-white cursor-pointer' />
            </div>
          })}
        <button className='py-4 mt-4 px-8 text-white bg-black uppercase '>Load more</button>
    </div>
  )
}

export default LatestWorks
