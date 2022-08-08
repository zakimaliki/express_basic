const categoryModel = require('../models/category')
const categoryController = {

  getAllCategory: async(req, res, next) => {
    try{
      const page = Number(req.query.page) || 1
      const limit = Number(req.query.limit) || 5
      const offset = (page - 1) * limit
      const sortby = req.query.sortby || name
      const sort = req.query.sort.toUpperCase() || "ASC"
      console.log(sort);
      const result = await categoryModel.selectAll({limit,offset,sort,sortby})
      const {rows: [count]} = await categoryModel.countCategory()
      const totalData = parseInt(count.count)
      const totalPage = Math.ceil(totalData/limit)
      console.log(result);
      res.status(200).json({
        pagination:{
          currentPage : page,
          limit:limit,
          totalData:totalData,
          totalPage:totalPage
        },
        data:result.rows
      })
    }catch(error){
      console.log(error);
    }
  },
  getCategory: (req, res, next) => {
    const id = Number(req.params.id)
    categoryModel.select(id)
      .then(
        result => res.json(result.rows)
      )
      .catch(err => res.send(err)
      )
  },
  insert: (req, res, next) => {
    const { id, name } = req.body
    categoryModel.insert(id, name)
      .then(
        result => res.json('Product created')
      )
      .catch(err => res.send(err)
      )
  },
  update: (req, res, next) => {
    const id = Number(req.params.id)
    const name = req.body.name
    categoryModel.update(id, name)
      .then(
        result => res.json('Product updated')
      )
      .catch(err => res.send(err)
      )
  },
  delete: (req, res, next) => {
    const id = Number(req.params.id)
    categoryModel.deleteCategory(id)
      .then(
        result => res.json('Product deleted')
      )
      .catch(err => res.send(err)
      )
  }
}

module.exports = categoryController
