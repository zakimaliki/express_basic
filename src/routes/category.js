const express = require('express')
const router = express.Router()
const categoryController = require('../controller/category')

router
  .get('/', categoryController.getAllCategory)
  .get('/:id', categoryController.getCategory)
  .post('/', categoryController.insert)
  .put('/:id', categoryController.update)
  .delete('/:id', categoryController.delete)

module.exports = router
