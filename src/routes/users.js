const express = require('express')
const router = express.Router()
const {register,login,profile} = require('../controller/users')
const {protect} = require('../middlewares/auth')


router.post('/register',register)
router.post('/login',login)
router.get('/profile',protect,profile)


module.exports = router