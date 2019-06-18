var express = require('express')
var cors = require('cors')

const app = express()

if (process.env.NODE_ENV === 'dev') {
  app.use(cors())
}

app.listen(3001, () => console.log('Server listening on http://localhost:3001'))

app.get('/', (req, res) => {
  res.send('hi')
})
