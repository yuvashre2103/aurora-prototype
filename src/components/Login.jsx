import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login(){
  const [name, setName] = useState('')
  const [institution, setInstitution] = useState('')
  const [studentId, setStudentId] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    if(!name || (!studentId && !institution)){
      alert('Provide name and either student ID or institution name for verification.')
      return
    }
    const user = {name, institution, studentId}
    localStorage.setItem('aurora_user', JSON.stringify(user))
    navigate('/dashboard')
  }

  return (
    <div className='min-h-screen p-8 flex items-center justify-center bg-slate-50'>
      <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-6 rounded shadow'>
        <h2 className='text-xl font-semibold mb-4'>Sign in to Aurora (demo)</h2>
        <label className='block mb-2'>Full name
          <input value={name} onChange={e=>setName(e.target.value)} className='input' />
        </label>
        <label className='block mb-2'>Institution name (or leave blank)
          <input value={institution} onChange={e=>setInstitution(e.target.value)} className='input' />
        </label>
        <label className='block mb-4'>Student ID (or upload ID in the future)
          <input value={studentId} onChange={e=>setStudentId(e.target.value)} className='input' />
        </label>
        <p className='text-sm text-slate-500 mb-4'>We accept student ID or institution details for verification (demo mode: auto-approve).</p>
        <button type='submit' className='btn-primary w-full'>Continue</button>
      </form>
    </div>
  )
}
