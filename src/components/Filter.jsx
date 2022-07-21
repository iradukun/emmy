import React, { useEffect } from 'react';

const Filter = ({ activeImageType, setActiveImageType, setFiltered, latestWorksData}) => {
  
  useEffect(()=>{
    if(activeImageType === 'All' ) {
        setFiltered(latestWorksData);
        return;
    }

    const filtered = latestWorksData.filter(latestWorkData=>{
        return latestWorkData.type === activeImageType;
    })

    setFiltered(filtered);
  }, [activeImageType])

  const buttons = ['All', 'Fashion', 'Lifestyle', 'Natural', 'Wedding', 'Videos'].map(buttonData=>{
    return <button onClick={()=> setActiveImageType(buttonData)} className={`text-${activeImageType === buttonData ? '[green]' : 'gray-500' } ${buttonData !== 'Videos' && 'border-r'} border-gray-500 px-[2rem]`}>{buttonData}</button>
  })
  return (
    <div className='w-full h-fit flex items-center justify-center '>
        {buttons}
    </div>
  )
}

export default Filter
