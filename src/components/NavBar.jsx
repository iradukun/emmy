import React,  { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {

  const [navbarItemsData, setNavbarItemsData] = useState([{name: 'Home', active: true},{name: 'About', active: false}, {name: 'Services', active: false}, {name: 'Pricing', active: false}, {name: 'portifolio', active: false}, {name: 'Blog', active: false }, {name: 'Pages', active: false}, {name: 'Contact', active: false}])

  const [dropDown, setDropdownOpen] = useState(false);


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

  const openDropDown = () =>{
    setDropdownOpen(true)
  }

  const closeDropDown = () =>{
    setDropdownOpen(false)
  }

  const navbarItems = navbarItemsData.map((navbarItemData, index) =>{
    return navbarItemData.name === 'Pages' ?<Link to={`#`} onClick={()=>handleLinkClick(navbarItemData.name)} className={ `mx-4 py-8  border-b-4 hover:border-b-[green] text-lg transition duration-500 relative`} style={{borderBottom: navbarItemData.active && '4px solid green'}} key={index} onMouseEnter={ openDropDown} onMouseLeave={ closeDropDown } >{navbarItemData.name}
      {dropDown && <div className='dropDown w-[10rem] h-fit absolute top-[6rem] z-40 bg-black flex flex-col items-start justify-center animate-pulse' >
        <Link to='/Gallery' className='text-white text-sm py-2 px-4'>Gallery</Link>
        <Link to='/Portifolio' className='text-white text-sm py-2 px-4'>Portifolio details</Link>
        <Link to='/Blog' className='text-white text-sm py-2 px-4'>Blog details</Link>
      </div>}
    </Link>: <Link to={navbarItemData.name !=='Pages' ? `/${navbarItemData.name}` : `#`} onClick={()=>handleLinkClick(navbarItemData.name)} className={ `mx-4 py-8  border-b-4 hover:border-b-[green] text-lg transition duration-500 relative`} style={{borderBottom: navbarItemData.active && '4px solid green'}} key={index} >{navbarItemData.name}
      
    </Link> 
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
