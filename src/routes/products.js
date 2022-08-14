
const express = require('express')
const router = express.Router()
const multer = require('multer')
const {getAllProduct,getProduct,insertProduct,updateProduct,deleteProduct} = require('../controller/products')
const {protect} = require('../middlewares/auth')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
  }
})

const upload = multer({ storage: storage })


router
  .get('/',protect, getAllProduct)
  .get('/:id',protect, getProduct)
  .post('/',protect,upload.single('photo'), insertProduct)
  .put('/:id',protect,upload.single('photo'), updateProduct)
  .delete('/:id',protect, deleteProduct)

module.exports = router
