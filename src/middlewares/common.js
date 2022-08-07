const myMiddle = (req, res, next)=>{
    const stock = req.body.stock
    if(stock < 1){
        res.json("stock must be more than 1")
    }
    next()
}

const validate = (req, res, next)=>{
    const stock = req.body.stock
    if(stock < 1){
        res.json("stock must be more than 1")
    }
    next()
}

module.exports = {myMiddle,validate}