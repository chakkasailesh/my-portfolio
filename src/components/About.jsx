import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello, I'm Sailesh 👋. With 2.5 years of experience at Infosys, I'm a
          full-stack developer who thrives on bridging the gap between front-end
          aesthetics and back-end muscle. Whether it's weaving magic with
          Java/Spring Boot or orchestrating the dance of ReactJS and NodeJS, I
          relish diving deep into code to craft solutions that resonate. But my
          toolkit extends beyond lines of script. As a quick learner with a
          passion for knowledge, I'm constantly pushing boundaries, and
          exploring new technologies. This insatiable curiosity fuels my ability
          to adapt and innovate, keeping me ahead of the curve in this
          ever-evolving digital landscape.
        </p>
        <br />
        <p className="text-xl">
          Beyond code, my heart races with the thrill of a perfectly timed
          yorker. This love for the game translates into my work ethic – a
          dedication to precision, teamwork, and a relentless pursuit of
          improvement. So, if you're looking for a full-stack developer who's as
          adept at navigating complex frameworks as dismantling a batting order,
          let's talk! My bat may be gathering dust, but my code is poised to
          leave even the most seasoned batsman clean bowled.
        </p>
      </div>
    </div>
  )
}

export default About
