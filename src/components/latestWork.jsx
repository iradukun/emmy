import React from 'react'

const LatestWork = (props) => {
  const { data, handleActive, handleInActive } = props;

  return (
    <div className='transition-all duration-[350ms] ease-in cursor-pointer mb-[12px]' > 
        <img src={`/assets/images/${data.image}`} className='w-full max-h-[35rem]' alt="" onMouseEnter={()=>handleActive(data.image)} onMouseLeave={()=>handleInActive(data.image)} />
    </div>
  )
}

export default LatestWork
