import React from 'react'
import spotify from '../assets/portfolio/spotify-2.0.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: spotify,
      demo: 'https://gilded-biscochitos-0e31e7.netlify.app/',
      repo: 'https://github.com/chakkasailesh/spotify-clone',
    },
    {
      id: 2,
      src: spotify,
      demo: 'https://gilded-biscochitos-0e31e7.netlify.app/',
      repo: 'https://github.com/chakkasailesh/spotify-clone',
    },
    {
      id: 3,
      src: spotify,
      demo: 'https://gilded-biscochitos-0e31e7.netlify.app/',
      repo: 'https://github.com/chakkasailesh/spotify-clone',
    },
    {
      id: 4,
      src: spotify,
      demo: 'https://gilded-biscochitos-0e31e7.netlify.app/',
      repo: 'https://github.com/chakkasailesh/spotify-clone',
    },
  ]
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={repo}
                  className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
