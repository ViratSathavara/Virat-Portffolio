import React from 'react'

const Sections = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <div
        className={`
          flex flex-col w-80 h-full fixed items-center gap-10 pt-24 transition-all duration-300
          ${isOpen ? 'right-0 bg-indigo-800 text-white' : '-right-80 bg-white text-indigo-800'}
        `}
      >
        <div className='flex flex-col w-60 gap-10 h-72'>
        <a href='#intro' onClick={() => setIsOpen(false)} className='font-normal hover:font-bold transition-all duration-400'>About</a>
        <a href='#home' onClick={() => setIsOpen(false)} className='font-normal hover:font-bold transition-all duration-400'>Home</a>
        <a href='#experience' onClick={() => setIsOpen(false)} className='font-normal hover:font-bold transition-all duration-400'>Experience</a>
        <a href='#skills' onClick={() => setIsOpen(false)} className='font-normal hover:font-bold transition-all duration-400'>Skills</a>
        <a href='#project' onClick={() => setIsOpen(false)} className='font-normal hover:font-bold transition-all duration-400'>Projects</a>
        </div>
      </div>
    </div>
  )
}

export default Sections
