const { graphqlHTTP } = require('express-graphql')
const express = require('express')
const schema = require('./schema/schema')
const colors = require('colors')
const connectDB = require('./config/db')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 5000

const app = express()

// connect to database
connectDB()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

app.listen(port, console.log(`Server running on port ${port}`))
