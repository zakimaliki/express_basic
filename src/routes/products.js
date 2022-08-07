
const express = require('express');
const router = express.Router();
const commonMiddle = require('../middlewares/common')
const productController = require('../controller/products');  

router.get('/', productController.getAllProduct)
router.get('/:id', productController.getProduct)
router.post('/', commonMiddle.validate, productController.insert)
router.put('/:id', commonMiddle.validate, productController.update)
router.delete('/:id', productController.delete)

module.exports = router