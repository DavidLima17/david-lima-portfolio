import React from 'react'

const Experience = () => {

  const projects = [
    {id: 1, src: '', disabled: true},
    {id: 1, src: '', disabled: true},
    {id: 1, src: '', disabled: true}, 
  ]

  return (
    <div className='w-full bg-gradient-to-b from-gray-800 to-black text-gray-500 md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-600'>My Projects</p>
          <p className='py-6'>Here are some of my persnal projects that I have completed. <em>*note projects with disabled demo have not been deployed at the moment.</em></p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          <div className='shadow-md shadow-gray-700 rounded-lg'>
            <img src={require('../assets/heroimage.jpg')} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' disabled={true}>Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience