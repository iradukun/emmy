import React from 'react'
import Fade from 'react-reveal';
import AddIcon from '@mui/icons-material/Add';

const LatestWork = (props) => {
  const { data, handleActive, handleInActive } = props;

  return (
    <div className='transition-all duration-[350ms] ease-in cursor-pointer mb-[12px] relative' onMouseEnter={()=>handleActive(data.image)} onMouseLeave={()=>handleInActive(data.image)} > 
        <div className={`absolute w-full h-full flex flex-col items-center justify-center bg-${data.active === true ? '[#00000088]' : 'transparent'} transition-all duration-500 `} >
          <AddIcon className='text-white' style={{display: data.active ? 'block' : 'none'}} />
          <Fade bottom >
            <div className='  absolute bottom-0 flex flex-col items-center justify-center p-4 gap-4' style={{display: data.active ? 'flex' : 'none'}}>
              <span className='text-white text-3xl font-black uppercase'>colors speak</span>
              <span className='text-green-500 block font-sans'>{data.type}</span>
            </div>
          </Fade>
        </div>
        <img src={`/assets/images/${data.image}`} className='w-full max-h-[40rem] transition-all duration-500' alt=""  />
    </div>
  )
}

export default LatestWork
