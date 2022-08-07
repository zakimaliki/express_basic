const express = require('express');
const app = express();
const ProductRouter = require('./src/routes/products')
const CategoryRouter = require('./src/routes/category')
app.use(express.json())
app.use('/products', ProductRouter)
app.use('/category', CategoryRouter)
app.listen(8080 , () => { 
    console.log("server running on http://localhost:8080");
})

