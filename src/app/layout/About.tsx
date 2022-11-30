import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen w-full bg-gradient-to-b from-gray-800 to-black text-gray-500'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
            <h3 className='text-4xl font-bold inline border-b-4 border-gray-600'>About</h3>
        </div>

        <p className='text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sed nesciunt dolorum aspernatur debitis quis sint a excepturi consectetur! Atque unde obcaecati explicabo tempora culpa, totam fugiat possimus dicta reprehenderit!
        </p>

        <br />

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat totam alias modi labore reprehenderit aperiam deleniti maxime, repudiandae fugiat inventore aliquid id vitae esse sint atque fugit. Labore, neque!
        </p>
      </div>
    </div>
  )
}
export default About
