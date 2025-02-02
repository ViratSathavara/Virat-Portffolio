import React from 'react'

const Sections = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <div
        className={`
          flex flex-col w-80 h-full fixed items-center gap-10 pt-24 transition-all duration-300
          ${isOpen ? 'right-0 bg-[#214f92] text-white' : '-right-80 bg-[#2C3E50] text-[#0A192F]'}
        `}
      >
        <div className='flex flex-col w-60 gap-10 h-72'>
  <a 
    href='#home' 
    onClick={() => setIsOpen(false)} 
    className='font-normal hover:font-bold transition-all text-xl duration-400 hover:text-[#0A192F]'
  >
    Home
  </a>
  <a 
    href='#intro' 
    onClick={() => setIsOpen(false)} 
    className='font-normal hover:font-bold transition-all text-xl duration-400 hover:text-[#0A192F]'
  >
    About
  </a>
  <a 
    href='#experience' 
    onClick={() => setIsOpen(false)} 
    className='font-normal hover:font-bold transition-all text-xl duration-400 hover:text-[#0A192F]'
  >
    Experience
  </a>
  <a 
    href='#skills' 
    onClick={() => setIsOpen(false)} 
    className='font-normal hover:font-bold transition-all text-xl duration-400 hover:text-[#0A192F]'
  >
    Skills
  </a>
  <a 
    href='#project' 
    onClick={() => setIsOpen(false)} 
    className='font-normal hover:font-bold transition-all text-xl duration-400 hover:text-[#0A192F]'
  >
    Projects
  </a>
</div>
      </div>
    </div>
  )
}

export default Sections
