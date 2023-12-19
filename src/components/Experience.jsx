import React from 'react'
import node from '../assets/node.png'
import react from '../assets/react.png'
import docker from '../assets/docker.png'
import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import git from '../assets/git.png'
import springboot from '../assets/spring-boot.png'
import tailwind from '../assets/tailwind.png'

export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      id: 2,
      src: react,
      title: 'React.js',
      style: 'shadow-blue-400',
      href: 'https://react.dev/',
    },
    {
      id: 3,
      src: node,
      title: 'Node.js',
      style: 'shadow-green-600',
      href: 'https://nodejs.org/en',
    },
    {
      id: 4,
      src: java,
      title: 'Java',
      style: 'shadow-blue-600',
      href: 'https://www.java.com/en/',
    },
    {
      id: 5,
      src: springboot,
      title: 'Spring Boot',
      style: 'shadow-green-400',
      href: 'https://spring.io/projects/spring-boot',
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
      href: 'https://tailwindcss.com/',
    },
    {
      id: 7,
      src: git,
      title: 'Git',
      style: 'shadow-orange-600',
      href: 'https://git-scm.com/',
    },
    {
      id: 8,
      src: docker,
      title: 'Docker',
      style: 'shadow-blue-600',
      href: 'https://www.docker.com/',
    },
  ]
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are some of the technologies I've worked with among others
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, title, src, style, href }) => (
            <a
              key={id}
              href={href}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
