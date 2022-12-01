import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const links = [
    {id: 1, link: 'home'},
    {id: 2, link: 'about'},
    {id: 3, link: 'education'},
    {id: 4, link: 'experience'},
    {id: 5, link: 'skills'}
  ]

  return (
    <header className='flex justify-between items-center w-full h-20 text-white bg-black fixed'>
        <h1 id='signature' className='text-6xl font-bold font-signature ml-2'>David Lima</h1>
        <ul id='menu' className='hidden md:flex'>

          {links.map(({id, link}) => (
            <li key={id} className='px-4 cursor-pointer capitalize font-medium hover:scale-150 duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>
          ))}

        </ul> 

        <div onClick={() => setMobileMenu(!mobileMenu)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {mobileMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {mobileMenu && (
          <ul id='menu' className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
            {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => setMobileMenu(!mobileMenu)} to={link} smooth duration={500}>{link}</Link></li>
              ))}
          </ul>
        )}

    </header>
  )
}

export default Navbar
