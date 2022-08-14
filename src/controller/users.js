const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const createError = require('http-errors')
const {findEmail,create} = require('../models/users')
const commonHelper = require('../helper/common')

const UserController ={
 register : async(req,res,next)=>{
    try{
      const {email,password,fullname} = req.body;
      const {rowCount} = await findEmail(email)
      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(password);
      const id = uuidv4()
      if(rowCount){
        return next(createError(403,"Email is already used"))
      }
      const data={
        id:uuidv4(),
        email,
        passwordHash,
        fullname
      }
      create(data)      
      .then(
        result => commonHelper.response(res, result.rows, 201, "Category created")
      )
      .catch(err => res.send(err)
      )
    }catch(error){
      console.log(error);
    }
  }
}


module.exports = UserController 