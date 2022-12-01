import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div id='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div id='content' className='flex flex-col justify-center h-full  text-gray-500'>
          <h1 className='text-4xl sm:text-7xl py-6 max-w-md font-bold'>Full Stack Developer</h1>
          <p>
            I'm a recent graduate looking to build experience in developing web applications!
            Some of the technologies I have learned to use so far include;
          </p>
          <p>React/Redux, Angular, Typescript, ASP .NET, Tailwind</p>

          <div>
            <Link to='experience' smooth duration={500} className='group text-white w-fit px-6 py-5 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              <span className='pr-2'>Experience</span> 
              <span className='group-hover:rotate-90 duration-300'>
                <BsFillArrowRightCircleFill size={25}/>
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={require('../assets/heroimage.jpg')} alt="my profile" className='rounded-2xl mx-24 w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home