import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import AuroraLogo from './AuroraLogo'
import Chatbot from './features/Chatbot'
import MoodTracker from './features/MoodTracker'
import Journal from './features/Journal'

export default function Dashboard(){
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    try{
      const u = JSON.parse(localStorage.getItem('aurora_user'))
      setUser(u)
    }catch(e){ setUser(null) }
  }, [])

  if(!user) return <div className='p-8'>Please <a href='/login' className='text-indigo-600 underline'>sign in</a>.</div>

  function logout(){
    localStorage.removeItem('aurora_user')
    navigate('/')
  }

  return (
    <div className='min-h-screen p-8 bg-slate-50'>
      <header className='flex justify-between items-center mb-6'>
        <div className='flex items-center gap-3'>
          <AuroraLogo className='w-10 h-10' />
          <div>
            <div className='font-semibold'>{user.name}</div>
            <div className='text-sm text-slate-500'>{user.institution || 'Student'}</div>
          </div>
        </div>
        <div className='space-x-2'>
          <button onClick={logout} className='btn'>Logout</button>
        </div>
      </header>

      <main className='grid grid-cols-3 gap-6'>
        <section className='col-span-2 p-4 bg-white rounded shadow'>
          <h3 className='font-semibold mb-3'>Aurora — Chat Support</h3>
          <Chatbot />
        </section>

        <aside className='p-4 bg-white rounded shadow space-y-4'>
          <MoodTracker />
          <Journal />
        </aside>
      </main>
    </div>
  )
}
