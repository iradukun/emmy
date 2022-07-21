import React,  { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {

  const [navbarItemsData, setNavbarItemsData] = useState([{name: 'Home', active: true},{name: 'About', active: false}, {name: 'Services', active: false}, {name: 'Pricing', active: false}, {name: 'portifolio', active: false}, {name: 'Blog', active: false }, {name: 'Pages', active: false}, {name: 'Contact', active: false}])

  const handleLinkClick = (id) =>{
    setNavbarItemsData(prevNavBarItemsData=>{
      return prevNavBarItemsData.map(prevNavBarItemData=>{
        if(prevNavBarItemData.active === true) {
          return {...prevNavBarItemData, active: false}
        }
        return prevNavBarItemData.name === id ? {...prevNavBarItemData, active: true} : prevNavBarItemData;
      })
    })
    
  }

  const navbarItems = navbarItemsData.map((navbarItemData, index) =>{
    return <Link to={`/${navbarItemData.name}`} onClick={()=>handleLinkClick(navbarItemData.name)} className={ `mx-4 py-8 border-b-${navbarItemData.active ? '[green]' : 'transparent' } border-b-4 hover:border-b-[green] text-lg transition duration-500`} key={index}>{navbarItemData.name}</Link>
  })

  return (
    <div className='w-full h-24 px-8 flex items-between justify-center gap-[2rem] '>
      <a  href='/' className='flex-[1] flex items-center justify-center'>
        <img className='cursor-pointer' src="/assets/images/logo.png" alt="logo"  />
      </a>
      <div className='flex-[4] flex gap-8 justify-center items-center '>
        {navbarItems}
      </div>
      <div className='flex-[1] grid place-items-center'>
        <div className='w-1/5 h-1/2 cursor-pointer grid place-items-center bg-[green]'>
          <SearchIcon className='text-white' />
        </div>
      </div>
    </div>
  )
}

export default NavBar
