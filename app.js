const express = require('express')
const app = express()
const operationsRouter = require('./operations')
const authenticate = require('./middleware')

app.use(express.json())

// app.use('/', operationsMiddleware)
app.use('/',authenticate, operationsRouter)

app.listen(5000, () => {
    console.log('listening...')
})