let products = [
    {
        id: 1,
        name : "baju",
        price : 100000,
        stock : 2
    },
    {
        id: 2,
        name : "kemeja",
        price : 200000,
        stock : 10
    }
]
const productController = {
    getProduct:(req, res, next)=>{
        const id = Number(req.params.id)
        const product = products.find(product => product.id === id)
        if (!product) {
            return res.status(404).send('Product not found')
        }
        res.json(product)
    },
    getAllProduct:(req, res, next)=>{
        console.log(res.status)
        res.json(products)
    },
    insert: (req, res, next)=>{
        const {name,price,stock} = req.body
        const newProduct = {
            id: products.length + 1,
            name,
            price,
            stock
        }
        products.push(newProduct)
        res.status(201).json('Product created')
    },
    update:(req, res, next)=>{
        const id = Number(req.params.id)
        const index = products.findIndex(product => product.id === id)
        if (index === -1) {
            return res.status(404).send('Product not found')
        }
        const {name,price,stock} = req.body
        const updatedProduct = {
            id: products[index].id,
            name,
            price,
            stock
        }
        products[index] = updatedProduct
        res.status(200).json('Product updated')
    },
    delete:(req, res, next)=>{
        const id = Number(req.params.id)
        const index = products.findIndex(product => product.id === id)
        if (index === -1) {
            return res.status(404).send('Product not found')
        }    
         products.splice(index,1)
        res.status(200).json('Product deleted')
    },
}

module.exports = productController;