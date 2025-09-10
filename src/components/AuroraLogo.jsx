import React from 'react'

export default function AuroraLogo({className=''}){

  return (
    <svg viewBox='0 0 200 200' className={className} xmlns='http://www.w3.org/2000/svg' role="img" aria-label="Aurora logo">
      <defs>
        <linearGradient id='g1' x1='0' x2='1'>
          <stop offset='0' stopColor='#8dd3f7'/>
          <stop offset='1' stopColor='#7b8dfc'/>
        </linearGradient>
      </defs>
      <circle cx='100' cy='100' r='90' fill='url(#g1)' />
      <path d='M50 120 Q85 40 150 95 Q115 160 60 120 Z' fill='white' opacity='0.95' />
    </svg>
  )
}
