const Pool = require('../config/db')
const findEmail = (email) =>{
    return  new Promise ((resolve,reject)=> 
    Pool.query(`SELECT email FROM users WHERE email='${email}'`,(error,result)=>{
      if(!error){
        resolve(result)
      }else{
        reject(error)
      }
    })
    )
}
const create = (data)=>{
const {id,email,passwordHash,fullname}= data
    return  new Promise ((resolve,reject)=> 
    Pool.query(`INSERT INTO users(id, email,password,fullname) VALUES('${id}','${email}','${passwordHash}','${fullname}')`,(error,result)=>{
      if(!error){
        resolve(result)
      }else{
        reject(error)
      }
    })
    )
}

module.exports = {
    findEmail,
    create
}