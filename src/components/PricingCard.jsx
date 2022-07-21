import React, { useState } from 'react'

const PricingCard = (props) => {
  const { data } = props

  const [hoverActive, setHoverActive] = useState(false)
  return (
    <div className={`h-full w-[18rem] bg-white relative flex flex-col items-center justify-between transition-all duration-500`} onMouseEnter={()=>setHoverActive(true)} onMouseLeave={()=>setHoverActive(false)} style={{boxShadow: '0px 0px 46px -27px rgba(117,117,117,1)'}}>
        
        <div className={`w-[8rem] h-[8rem] bg-${hoverActive ? '[green]' : 'white'} rounded-full absolute top-[-3rem] flex items-center justify-center transition-all duration-500`} style={{boxShadow: !hoverActive && '-5px -22px 46px -13px rgba(227,227,227,1)'}}>
            <span className={`text-2xl text-${hoverActive ? 'white' : '[green]'} font-bold`}>$ {data.price}</span>
        </div>

      <div className={`w-full h-32 flex flex-col gap-[2rem] items-center justify-center border-b-2 bg-${hoverActive ? '[green]' : 'white'} transition-all duration-500`}>
        <span className={`text-sm text-${hoverActive ? 'white' : 'black'} z-20  mt-[1rem]`}>{data.time} hour</span>
        <span className={`text-2xl text-${hoverActive && 'white'} font-black uppercase z-10 `}>{data.type}</span>
      </div>

      <div className='w-full h-[17rem] flex flex-col items-center justify-center gap-[1rem] bg-[bue] px-0'>
        {data.services.map(itemData=>{
            return <span className='text-gray-500 font-["poppins"] text-sm tracking-wide leadin-snug'>{itemData}</span>
        })}

        <button className={`uppercase bg-${hoverActive ? '[green]' : 'buttonGray'} px-10 mt-[1rem] text-${hoverActive && 'white'} font-black py-2 transition-all duration-500`}>Get appointment</button>
      </div>
    </div>
  )
}

export default PricingCard
