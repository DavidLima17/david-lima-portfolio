import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const links = [
    {id: 1, path: '/', link: 'home'},
    {id: 2, path:'/about', link: 'about'},
    {id: 3, path: '/education', link: 'education'},
    {id: 4, path: '/experience', link: 'experience'},
    {id: 5, path: '/skills', link: 'skills'}
  ]

  return (
    <header className='flex justify-between items-center w-full h-20 text-white bg-black fixed'>
        <h1 className='text-6xl font-bold font-signature ml-2'>David Lima</h1>
        <nav className='hidden md:flex'>

          {links.map(({id, link, path}) => (
            <NavLink key={id} to={path} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{link}</NavLink>
          ))}
          
        </nav>

        <div onClick={() => setMobileMenu(!mobileMenu)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {mobileMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {mobileMenu && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({id, link, path}) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>{link}</li>
              ))}
          </ul>
        )}

    </header>
  )
}

export default Navbar
