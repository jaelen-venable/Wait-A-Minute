const express = require('express')
const cors = require('cors')
const logger = require('morgan')

/* CONFIGURATIONS */

const app = express()
const PORT = process.env.PORT || 3001
const db = require('./db')

app.use(cors())
app.use(logger('dev'))
// the following middleware comes out of the box with express...
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/* routes go between these comments */

/* routes go between these comments */

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
  })
