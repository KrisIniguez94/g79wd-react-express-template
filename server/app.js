const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3004
const listener = () => console.log(`Server is running on port ${port}`)
const knex = require('../db/knex')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')

app.disable('x-powered-by')
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/ping', (req, res, next) => {
  res.json({ message: 'pong!' })
})

app.get('/api/strength_stats', (req,res, next) =>{
  return knex('strength_stats').select().then(strength_stats =>
  res.json({strength_stats:strength_stats}))
})

app.post('/api/strength_stats', (req, res, next) => {
  knex('strength_stats').insert(req.body).then(() => {
    knex('strength_stats').orderBy('date', 'asc').then(strength_stats => res.json(strength_stats))
  })
})

app.patch('/api/strength_stats/:id', (req, res, next) => {
  knex('strength_stats').update(req.body).where('id', req.params.id)
    .then(() => {
      knex('strength_stats').orderBy('date', 'desc').then(strength_stats => res.json(strength_stats))
    })
})

app.delete('/api/strength_stats/:id', (req, res, next) => {
  knex('strength_stats').del().where('id', req.params.id)
    .then(() => {
      knex('strength_stats').then(strength_stats => res.json(strength_stats))
    })
})

app.get('/', (req, res, next) => {
  const index = path.join(__dirname, '../client/build/index.html')
  res.sendFile(index)
})

// handle error
app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})
// not found
app.use((req, res, next) => {
  res.status(404).json( {error: { message: "Not found."}})
})

app.listen(port, listener)
