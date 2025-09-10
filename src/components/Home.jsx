import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(){
  return (
    <div className='min-h-screen p-8 bg-slate-50'>
      <header className='flex justify-between items-center mb-8'>
        <div className='flex items-center gap-3'>
          <img src='/logo192.png' alt='aurora logo' className='w-12 h-12 rounded-full' />
          <h2 className='text-xl font-semibold'>Aurora — Student Mental Health</h2>
        </div>
        <nav className='space-x-4'>
          <Link to='/login' className='btn'>Sign In</Link>
        </nav>
      </header>

      <main className='grid grid-cols-2 gap-8'>
        <section className='p-6 bg-white rounded shadow'>
          <h3 className='text-lg font-bold mb-3'>Problem</h3>
          <p>College students face rising mental health issues and limited stigma-free support. Aurora provides a campus-friendly, localized, and anonymous-first support prototype.</p>
        </section>
        <section className='p-6 bg-white rounded shadow'>
          <h3 className='text-lg font-bold mb-3'>What Aurora does</h3>
          <ul className='list-disc ml-5'>
            <li>AI-guided chatbot (Aurora)</li>
            <li>Mood tracker, Journal & Surveys</li>
            <li>Relaxation audio, sleep & period tracker</li>
            <li>Book counselors & location-based helplines</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
