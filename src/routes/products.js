
const express = require('express')
const router = express.Router()
const {getAllProduct,getProduct,insertProduct,updateProduct,deleteProduct} = require('../controller/products')
const {protect} = require('../middlewares/auth')

router
  .get('/',protect, getAllProduct)
  .get('/:id',protect, getProduct)
  .post('/',protect, insertProduct)
  .put('/:id',protect, updateProduct)
  .delete('/:id',protect, deleteProduct)

module.exports = router
