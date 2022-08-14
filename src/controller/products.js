const createError = require('http-errors')
const {selectAll,select,countData,findId,insert,update,deleteData} = require('../models/products')
const commonHelper = require('../helper/common')


const productController = {
  getAllProduct: async(req, res) => {
    try{
      const page = Number(req.query.page) || 1
      const limit = Number(req.query.limit) || 5
      const offset = (page - 1) * limit
      const sortby = req.query.sortby || name
      const sort = req.query.sort.toUpperCase() || "ASC"
      const result = await selectAll({limit,offset,sort,sortby})
      const {rows: [count]} = await countData()
      const totalData = parseInt(count.count)
      const totalPage = Math.ceil(totalData/limit)
      const pagination ={     
            currentPage : page,
            limit:limit,
            totalData:totalData,
            totalPage:totalPage
          }
      commonHelper.response(res, result.rows, 200, "get data success",pagination)
    }catch(error){
      console.log(error);
    }
  },
  getProduct: (req, res) => {
    const id = Number(req.params.id)
    select(id)
      .then(
        result => commonHelper.response(res, result.rows, 200, "get data success")
      )
      .catch(err => res.send(err)
      )
  },
  insertProduct: async(req, res) => {
    const photo = req.file.filename;
    const { name,stock,price,description } = req.body
    const {rows: [count]} = await countData()
    const id = Number(count.count)+1;

    const data ={
      id,
      name,
      stock,
      price,
      photo,
      description
    }
    insert(data)
      .then(
        result => commonHelper.response(res, result.rows, 201, "Product created")
      )
      .catch(err => res.send(err)
      )
  },
  updateProduct: async(req, res) => {
    try{
      const id = Number(req.params.id)
      const photo = req.file.filename;
      const { name,stock,price,description } = req.body
      const {rowCount} = await findId(id)
      if(!rowCount){
        return next(createError(403,"ID is Not Found"))
      }
      const data ={
        id,
        name,
        stock,
        price,
        photo,
        description
      }
      update(data)
        .then(
          result => commonHelper.response(res, result.rows, 200, "Product updated")
          )
          .catch(err => res.send(err)
          )
        }catch(error){
          console.log(error);
        }
  },
  deleteProduct: async(req, res, next) => {
    try{
      const id = Number(req.params.id)
      const {rowCount} = await findId(id)
      if(!rowCount){
        return next(createError(403,"ID is Not Found"))
      }
      deleteData(id)
        .then(
          result => commonHelper.response(res, result.rows, 200, "Product deleted")
        )
        .catch(err => res.send(err)
        )
    }catch(error){
        console.log(error);
    }
    // const id = Number(req.params.id)
    // const index = products.findIndex(product => product.id === id)
    // if (index === -1) {
    //   next(new createError.NotFound())
    // }
    // products.splice(index, 1)
    // res.status(200).json('Product deleted')
  }
}

module.exports = productController
