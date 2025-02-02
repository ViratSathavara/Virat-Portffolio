import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Topbar = () => {
  return (
    <>
    <div className=' items-center px-14 w-full flex bg-white h-24 justify-between'>
      <div className='text-2xl text-indigo-800 w-auto flex items-center gap-20'>
          hello
      </div>
      <div className='cursor-pointer'>
        <DensityMediumIcon />
      </div>
    </div>
    <div className='text-white bg-indigo-800 w-auto flex items-center gap-20'>
    <a href='#home' className='font-normal hover:font-bold'>Home</a>
    <a href='#intro' className='font-normal hover:font-bold'>About</a>
    <a href='#experience' className='font-normal hover:font-bold'>Eperience</a>
    <a href='#skills' className='font-normal hover:font-bold'>Skills</a>
    <a href='#project' className='font-normal hover:font-bold'>Projects</a>
  </div>
    </>
  )
}

export default Topbar
