const express = require('express')
const isEmpty = require('lodash/isEmpty')
const validator = require('validator')
const sqlFn = require('../mysql/index')
const router = express.Router()


const validateInput = (data)=> {
    let errors = {}
    if(validator.isEmpty(data.username)) {
        errors.username = "请填写用户名!"
    }
    if(!validator.isEmail(data.email)) {
        errors.email = "请填写email!"
    }
    if(validator.isEmpty(data.password)) {
        errors.password = "请填写密码!"
    }
    if(validator.isEmpty(data.passwordConfilmation)) {
        errors.passwordConfilmation = "请确认密码!"
    }
    if(!validator.equals(data.password,data.passwordConfilmation)) {
        errors.passwordConfilmation = "两次密码不同！"
    }
    return {
        errors,
        isValid:isEmpty(errors)
    }
}

router.post('/',(req,res)=>{
    const {errors,isValid} = validateInput(req.body)
    var sql = "insert into User values (null,?,?,?,?)"
    var arr = [req.body.username,req.body.email,req.body.password,req.body.passwordConfilmation]
    if(isValid) {
        sqlFn(sql,arr,function(data){
            if(data.affectedRows) {
                res.send({success:true})
            }else {
                res.status(400).json({error:'注册失败'})
            }
        })
    }else {
        res.status(400).json(errors)
    }
})


module.exports = router