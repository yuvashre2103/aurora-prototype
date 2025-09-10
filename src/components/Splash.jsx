import React from 'react'
import AuroraLogo from './AuroraLogo'

export default function Splash(){
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gradient-to-b from-indigo-500 to-teal-400'>
      <div className='text-center'>
        <AuroraLogo className='mx-auto w-48 h-48' />
        <h1 className='mt-6 text-white text-2xl font-semibold'>Aurora</h1>
      </div>
    </div>
  )
}
