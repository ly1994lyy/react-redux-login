const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send({
        'msg':'hello'
    })
})


module.exports = router