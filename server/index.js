const express = require('express')
const app = express()
const user = require('./routers/user')

app.use('/api/user',user)

app.listen(3001,()=>{
    console.log('http://localhost:3001')
})