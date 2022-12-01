import React from 'react'

const About = () => {
  return (
    <div id='about' className='h-screen w-full bg-gradient-to-b from-gray-800 to-black text-gray-500'>
      <div id='content' className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
            <h1 className='text-4xl font-bold inline border-b-4 border-gray-600'>About</h1>
        </div>

        <p className='text-xl mt-20'>
          My name is David Lima I currently live in Winnipeg, MB and I am a recent graduate of the Full Stack Developer program at Robertson College looking to break into the field of web development. I’ve always had a strong passion for understanding how applications and websites are run. This passion has motivated me to build not only my technical skills in working with various programming languages but also my business communication skill in order to pursue a career as a web developer. 
        </p>
      </div>
    </div>
  )
}
export default About
