const mysql = require('mysql')

var client = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"iwenuser"
})

function sqlFn(sql,arr,callback) {
  client.query(sql,arr,function(error,result){
    if(error) {
      console.log(new Error(error));
      return
    }
    callback(result)
  })
}

module.exports = sqlFn