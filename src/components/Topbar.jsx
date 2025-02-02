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
          ${isOpen ? 'bg-indigo-800' : 'bg-white'} 
          px-14 w-full flex items-center h-20 justify-between 
          transition-colors duration-400 z-10 fixed
        `}
      >
        <div
          className={`
            text-2xl ${isOpen ? 'text-white' : 'text-indigo-800'} 
            w-auto flex items-center gap-20 
            transition-colors duration-400
          `}
        >
          hello
        </div>
        <div className='cursor-pointer'>
          {isOpen ? (
            <CloseIcon 
              onClick={() => setIsOpen(!isOpen)}
              className={`
                ${isOpen ? 'text-white' : 'text-indigo-800'} 
                transition-colors duration-400
              `}
            />
          ) : (
            <DensityMediumIcon 
              onClick={() => setIsOpen(!isOpen)}
              className={`
                ${isOpen ? 'text-white' : 'text-indigo-800'} 
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
