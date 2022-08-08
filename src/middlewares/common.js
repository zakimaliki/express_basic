const validate = (req, res, next) => {
  const { name, stock, price } = req.body
  try {
    if (name === '' || stock === '' || price === '') throw new Error('kosong')
    if (isNaN(stock) || isNaN(price)) throw new Error('input bukan angka')
    if (!isNaN(name)) throw new Error('input bukan text')
  } catch (error) {
    res.send(`${error}`)
  }
  next()
}

module.exports = validate
