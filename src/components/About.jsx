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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit
          exercitationem sequi cum! Voluptatibus enim ut veritatis accusantium
          quos voluptate, quo voluptatum dolores, necessitatibus expedita sunt
          dignissimos assumenda! Aperiam, suscipit temporibus ducimus
          praesentium, eaque maxime sint error obcaecati quos voluptas autem
          molestias adipisci totam facilis nostrum illo fugit at itaque.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          tempora voluptatem, accusamus cum esse aspernatur minima ex quis quia?
          Eligendi laboriosam repellat facere? Eos nostrum commodi maiores,
          quasi accusamus nesciunt minima non quisquam eveniet molestiae facere
          quod amet at quis iure illo odit provident cum suscipit quaerat, ut
          iste similique?
        </p>
      </div>
    </div>
  )
}

export default About
