import React, {useState, useEffect} from 'react'

export default function Journal(){
  const [notes, setNotes] = useState(()=> {
    try { return JSON.parse(localStorage.getItem('aurora_journal')) || [] }
    catch(e){ return [] }
  })
  const [text, setText] = useState('')

  useEffect(()=>{
    try{ localStorage.setItem('aurora_journal', JSON.stringify(notes)) }catch(e){}
  }, [notes])

  function save(){
    if(!text.trim()) return
    const n = {id: Date.now(), text: text.trim(), date: new Date().toISOString()}
    setNotes(prev => [n, ...prev])
    setText('')
  }

  function clearAll(){
    if(!confirm('Clear all journal notes?')) return
    setNotes([])
    localStorage.removeItem('aurora_journal')
  }

  return (
    <div className='p-2'>
      <h4 className='font-semibold mb-2'>Journal (private)</h4>
      <textarea value={text} onChange={e=>setText(e.target.value)} className='input mb-2' placeholder='Write how you feel... (private)'></textarea>
      <div className='flex gap-2'>
        <button className='btn-sm' onClick={save}>Save</button>
        <button className='btn-sm' onClick={clearAll}>Clear demo</button>
      </div>
      <div className='mt-3 space-y-2 max-h-40 overflow-auto'>
        {notes.map(n=> (
          <div key={n.id} className='p-2 bg-slate-50 rounded border'>
            {new Date(n.date).toLocaleString()} — {n.text}
          </div>
        ))}
      </div>
    </div>
  )
}
