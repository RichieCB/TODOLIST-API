const Router = require('express').Router()

Router.get('/', async(req, resp) => {

    resp.send({
        success: true,
        data: {
            message: 'Proyecto TO DO List'
        }
    })
})


module.exports = [
    Router, //Agregar todos los router de users, task y subtask
]
