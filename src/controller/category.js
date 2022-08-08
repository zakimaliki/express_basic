const categoryModel = require('../models/category')
const categoryController = {
  getAllCategory: (req, res, next) => {
    categoryModel.selectAll()
      .then(
        result => res.json(result.rows)
      )
      .catch(err => next(new createError.in())

      )
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
