var express = require('express')
var cors = require('cors')
var zones = require('./BlizzardMasterZoneList.json')
var morgan = require('morgan')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(cors())
}

app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))

app.listen(3001, () => console.log('Server listening on http://localhost:3001'))

app.get('/zone-list', (req, res) => {
  res.send(zones)
})
