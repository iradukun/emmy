import React from 'react'
import Fade from 'react-reveal';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion'


const LatestWork = (props) => {
  const { data, handleActive, handleInActive, openModal } = props;

  return (
    <motion.div layout className='w-full cursor-pointer mb-[12px] relative' onMouseEnter={()=>handleActive(data.image)} onMouseLeave={()=>handleInActive(data.image)} > 

        <div className={`absolute w-full h-full flex flex-col items-center justify-center bg-${data.active === true ? '[#00000088]' : 'transparent'} transition-all duration-500 `} >
          <AddIcon className='text-white cursor-pointer' style={{display: data.active ? 'block' : 'none'}} onClick={()=>openModal(data.image)} />
          <Fade bottom >
            <div className='  absolute bottom-0 flex flex-col items-center justify-center p-4 gap-3' style={{display: data.active ? 'flex' : 'none'}}>
              <span className='text-white text-2xl font-black uppercase'>colors speak</span>
              <span className='text-green-500 block font-sans text-xs'>{data.type}</span>
            </div>
          </Fade>
        </div>

        <img src={`/assets/images/${data.image}`} className='w-full object-cover max-h-[40rem] transition-all duration-500' alt=""  />
        
    </motion.div>
  )
}

export default LatestWork
