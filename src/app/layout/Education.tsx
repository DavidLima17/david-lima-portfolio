import React from 'react'

const Education = () => {
  return (
    <div id='education' className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-gray-500'>
      <div id='content' className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
            <h1 className='text-4xl font-bold inline border-b-4 border-gray-600'>Education</h1>
        </div>

        <div className='text-xl mt-2'>
          <p className='font-bold'>BiT (Buisness Information Technology) Application Development - Diploma</p>
          <p className='italic mt-1'>Red River College - Winnipeg, MB</p>

          <p className='mt-4'>
            <span className='font-medium'>AUG 2011 - APR 2013</span>
            <br />
            In this program, I learned the fundamentals of IT technical skills from basic programming concepts to Object Oriented fundamentals in programming. As well as learning technical skills in the areas of Networking, Databases design, System analysis, and Web Fundamentals
          </p>
        </div>

        <br />

        <div className='text-xl'>
          <p className='font-bold'>Full Stack Developer - Diploma</p>
          <p className='italic mt-1'>Robertson College - Online Learning</p>

          <p className='mt-4'>
            <span className='font-medium'>MAR 2022 - DEC 2022</span>
            <br />
            During the course of this program, I broadened my knowledge of working in web development as well as developing applications on the backend to seamlessly interface with the frontend. I learned various frameworks like React/Redux, Angular, and the ASP .NET Entity Framework.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education