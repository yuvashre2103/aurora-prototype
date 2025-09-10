const express = require('express')
const app = express()
app.use(express.json())

app.get('/api/ping', (req, res) => res.json({ok:true}))

app.post('/api/sentiment', (req, res) => {
  const {text} = req.body
  if(!text) return res.status(400).json({err:'no text'})
  const neg = /sad|depress|anxious|angry|suicid|kill|harm/.test(text.toLowerCase())
  res.json({score: neg ? -1 : 1, negative: neg})
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log('Mock server running on', PORT))
