import restore from '../assets/ReStore.png'
import skinet from '../assets/Skinet.png'

const Experience = () => {

  const projects = [
    {id: 1, src: restore, code: 'https://github.com/DavidLima17/ReStore-Udemy', demo: 'education'},
    {id: 2, src: skinet, code: 'https://github.com/DavidLima17/Skinet-Udemy', demo: 'education'},
  ]

  return (
    <div id='experience' className='w-full bg-gradient-to-b from-gray-800 to-black text-gray-500 md:h-screen'>
      <div id='content' className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h1 className='text-4xl font-bold inline border-b-4 border-gray-600'>My Projects</h1>
          <p className='py-6'>Here are some of my persnal projects that I have completed. <em>*note projects may not have deployed demos at the moment</em></p>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0'>
          {projects.map(({id, src, code, demo}) => (
            <div key={id} className='shadow-md shadow-gray-700 rounded-lg'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
                <button 
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href=code;
                  }}>
                    Code
                </button>
                <button 
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'                   
                  >
                    Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience