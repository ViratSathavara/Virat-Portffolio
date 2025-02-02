import React, { useState } from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import Sections from './Sections';

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div
        className={`
          ${isOpen ? 'bg-[#0A192F]' : 'bg-[#1F2A40]'} 
          px-8 lg:px-14 w-full flex items-center h-20 justify-between 
          transition-colors duration-400 z-10 fixed top-0 left-0 right-0
        `}
      >
        <div
          className={`
            text-2xl ${isOpen ? 'text-white' : 'text-[#4F83CC]'} 
            w-auto flex items-center gap-5 lg:gap-20 
            transition-colors duration-400
          `}
        >
          <p className="font-semibold">hello</p>
        </div>
        <div className='cursor-pointer'>
          {isOpen ? (
            <CloseIcon 
              onClick={() => setIsOpen(!isOpen)}
              className={`
                ${isOpen ? 'text-white' : 'text-[#4F83CC]'} 
                transition-colors duration-400
              `}
            />
          ) : (
            <DensityMediumIcon 
              onClick={() => setIsOpen(!isOpen)}
              className={`
                ${isOpen ? 'text-white' : 'text-[#4F83CC]'} 
                transition-colors duration-400
              `}
            />
          )}
        </div>
      </div>
      
      <Sections isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Topbar;
