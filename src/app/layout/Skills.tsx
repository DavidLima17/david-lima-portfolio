import React from 'react'
import html from '../assets/html.png';
import angular from '../assets/angular.png'
import c from '../assets/c.png'
import css from '../assets/css.png'
import django from '../assets/django.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import python from '../assets/python.png'
import reactImage from '../assets/react.png'
import sql from '../assets/sql.png'
import typescript from '../assets/typescript.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import mui from '../assets/mui.png'

const Skills = () => {

  const skills = [
    { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: angular, title: 'Angular', style: 'shadow-red-500' },
    { id: 3, src: c, title: 'C#', style: 'shadow-purple-500' },
    { id: 4, src: css, title: 'CSS', style: 'shadow-cyan-500' },
    { id: 5, src: django, title: 'django', style: 'shadow-green-500' },
    { id: 6, src: github, title: 'github', style: 'shadow-gray-500' },
    { id: 7, src: javascript, title: 'Javascript', style: 'shadow-yellow-500' },
    { id: 8, src: node, title: 'Node.js', style: 'shadow-green-500' },
    { id: 9, src: python, title: 'Python', style: 'shadow-yellow-500' },
    { id: 10, src: reactImage, title: 'React', style: 'shadow-cyan-500' },
    { id: 11, src: sql, title: 'SQL', style: 'shadow-gray-500' },
    { id: 12, src: typescript, title: 'Typescript', style: 'shadow-blue-500' },
    { id: 13, src: tailwind, title: 'Tailwind', style: 'shadow-cyan-500' },
    { id: 13, src: mui, title: 'Material UI', style: 'shadow-blue-500' },
    { id: 14, src: bootstrap, title: 'Bootstrap', style: 'shadow-purple-500' },
  ]

  return (
    <div id='skills' className='w-full bg-gradient-to-b from-black to-gray-800 text-gray-500 md:h-screen'>
      <div id='content' className='max-w-screen-lg mx-auto p-4 flex flex-col'>
        <div>
          <h1 className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</h1>
          <p className='py-6'>These are some of the skills I have worked with so far on my projects.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {skills.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className='w-20 h-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Skills