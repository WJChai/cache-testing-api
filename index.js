const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/current-time', (req, res) => {
  res.set('Cache-Control', 'public, max-age=60000');
  res.send(new Date())
})

app.listen(port, () => {
  console.log(`Demo API listening at http://localhost:${port}`)
})