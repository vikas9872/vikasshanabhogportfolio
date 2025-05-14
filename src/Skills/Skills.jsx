import React from 'react'
import skills from './Skills.js';
const Skills = () => {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row justify-center items-center bg-[#f1efec] overflow-hidden pt-16" id='skills'>
      <div className="relative z-10 flex justify-center items-center text-white font-bold text-4xl md:text-7xl font-roboto-condensed p-10 w-[50%]">
        SKILLS
      </div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Videos/skills.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-items-center w-[50%] h-full p-8 z-10'>
      {
        skills.map((skill,id)=>(
          <div key={id} className='flex justify-around items-center border-2 border-white h-[70px] w-[200px]'>
            <img src={skill.images} className='h-[50px] w-[50px]' alt="" />
            <div className='text-white'>{skill.name}</div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Skills

