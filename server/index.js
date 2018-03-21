import express from 'express'
import path from'path'
import api from './routes/index' // route example
import mongoose from 'mongoose'
const dotenv = require('dotenv').config()
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { Nuxt, Builder } from 'nuxt'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// mongoose setup
const MONGOURI = process.env.MONGOURI || 'someback-upaddress';
// this .env file should be added to .gitignore since it contains passwords
mongoose.connect( MONGOURI, {useMongoClient: true})
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('port', port)

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
