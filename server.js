const express = require('express')
const app = express()

app.use('/assets', express.static(__dirname + '/src/assets'))

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/src/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/src/contact.html')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/src/index.html')
})


app.listen(3001, () => {
  console.log('listening port 3001')
})