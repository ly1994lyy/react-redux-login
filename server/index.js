const express = require('express')
const app = express()
const user = require('./routers/user')
const bodyParser = require('body-parser')

app.use(require('cors')())
app.use(bodyParser.json())
app.use('/api/user',user)

app.listen(3001,()=>{
    console.log('http://localhost:3001')
})