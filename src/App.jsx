import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Splash from './components/Splash'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Admin from './components/Admin'

export default function App(){
  const [showSplash, setShowSplash] = useState(true)
  useEffect(()=>{
    const t = setTimeout(()=> setShowSplash(false), 2000)
    return ()=> clearTimeout(t)
  }, [])

  if(showSplash) return <Splash />

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/admin' element={<Admin/>} />
    </Routes>
  )
}
