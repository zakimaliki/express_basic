const Pool  = require('../config/db')
const selectAll =()=>{
    return Pool.query('SELECT * FROM category')
}
const select =(id)=>{
    return Pool.query(`SELECT * FROM category WHERE id=${id}`)
}
const insert =(id,name)=>{
    return Pool.query(`INSERT INTO category(id,name) VALUES ('${id}','${name}')`)
}
const update =(id,name)=>{
    return Pool.query(`UPDATE category SET name='${name}' WHERE id='${id}'`)
}
const deleteCategory =(id)=>{
    return Pool.query(`DELETE FROM category WHERE id=${id}`)
}

module.exports = {
    selectAll,
    select,
    insert,
    update,
    deleteCategory
}