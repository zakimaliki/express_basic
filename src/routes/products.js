
const express = require('express')
const router = express.Router()
const productController = require('../controller/products')

router
  .get('/', productController.getAllProduct)
  .get('/:id', productController.getProduct)
  .post('/', productController.insert)
  .put('/:id', productController.update)
  .delete('/:id', productController.delete)

module.exports = router
