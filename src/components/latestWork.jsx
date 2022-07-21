import React from 'react'

const LatestWork = (props) => {
  const { data, handleActive, handleInActive } = props;

  return (
    <div className='inline' > 
        <img src={`/assets/images/${data.image}`} className='max-h-[80rem] max-w-[55rem]' alt="" onMouseEnter={()=>handleActive(data.image)} onMouseLeave={()=>handleInActive(data.image)} />
    </div>
  )
}

export default LatestWork
