import React, {useState, useEffect} from 'react'
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'

export default function MoodTracker(){
  const [data, setData] = useState(()=> {
    try { return JSON.parse(localStorage.getItem('aurora_mood')) || [{day:'Mon', mood:6},{day:'Tue', mood:5},{day:'Wed', mood:7}] }
    catch(e){ return [{day:'Mon', mood:6},{day:'Tue', mood:5},{day:'Wed', mood:7}] }
  })

  useEffect(()=>{
    try{ localStorage.setItem('aurora_mood', JSON.stringify(data)) }catch(e){}
  }, [data])

  function addMood(){
    const val = prompt('Rate your mood 1-10')
    const n = Number(val)
    if(!n || n<1 || n>10) return alert('Invalid value')
    setData(d => ([...d.slice(-8), {day: 'Now', mood: n}]))
  }

  return (
    <div className='p-2'>
      <h4 className='font-semibold mb-2'>Mood Tracker</h4>
      <div className='flex items-center gap-2 mb-3'>
        <button className='btn-sm' onClick={addMood}>Add</button>
        <div className='text-sm text-slate-500'>Recent: {data.map(d=>d.mood).join(', ')}</div>
      </div>
      <div style={{height:160}}>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={data}>
            <XAxis dataKey='day' />
            <YAxis domain={[0,10]} />
            <Tooltip />
            <Line type='monotone' dataKey='mood' stroke='#7b8dfc' strokeWidth={3} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
