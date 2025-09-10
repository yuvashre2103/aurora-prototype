import React, {useState, useRef, useEffect} from 'react'

const SAFE_KEYWORDS = /suicid|kill|harm|selfharm|depress|anxious|panic/;

export default function Chatbot(){
  const [messages, setMessages] = useState(()=> {
    try { return JSON.parse(localStorage.getItem('aurora_messages')) || [{from:'aurora', text:'Hi — I am Aurora. How are you feeling today?'}] }
    catch(e){ return [{from:'aurora', text:'Hi — I am Aurora. How are you feeling today?'}] }
  })
  const [input, setInput] = useState('')
  const bottom = useRef(null)

  useEffect(()=>{
    localStorage.setItem('aurora_messages', JSON.stringify(messages))
    bottom.current?.scrollIntoView({behavior:'smooth'})
  }, [messages])

  function send(){
    const t = input.trim()
    if(!t) return
    const userMsg = {from:'user', text: t, id: Date.now()}
    setMessages(m=>[...m, userMsg])
    setInput('')
    const txt = t.toLowerCase()

    if(SAFE_KEYWORDS.test(txt)){
      setMessages(m=>[...m, {from:'aurora', text:'I’m sorry you’re feeling distressed. If you are in immediate danger, please call local emergency services. Would you like resources or someone to talk to?'}])
      return
    }
    if(txt.includes('sad') || txt.includes('depress')){
      setMessages(m=>[...m, {from:'aurora', text:'I’m sorry you’re feeling sad. Would you like a short breathing exercise or to write this down in your journal?'}])
      return
    }
    if(txt.includes('happy') || txt.includes('good')){
      setMessages(m=>[...m, {from:'aurora', text:'That’s great to hear — glad you are feeling good!'}])
      return
    }
    if(txt.includes('breath') || txt.includes('breathing')){
      setMessages(m=>[...m, {from:'aurora', text:'Try this: breathe in 4s, hold 4s, breathe out 6s. Repeat three times.'}])
      return
    }

    setMessages(m=>[...m, {from:'aurora', text:'Thanks for sharing. Tell me more or try typing "breathing" for a short breathing exercise.'}])
  }

  return (
    <div>
      <div className='h-56 overflow-auto p-3 bg-slate-50 rounded border'>
        {messages.map((m, idx)=>(
          <div key={m.id ?? idx} className={`mb-2 flex ${m.from==='user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`inline-block p-2 rounded ${m.from==='user' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-800 shadow-sm'}`}>
              {m.text}
            </div>
          </div>
        ))}
        <div ref={bottom} />
      </div>

      <div className='mt-3 flex gap-2'>
        <input value={input} onChange={e=>setInput(e.target.value)} className='input flex-1' placeholder='Type to Aurora...' />
        <button className='btn' onClick={send}>Send</button>
      </div>
    </div>
  )
}
