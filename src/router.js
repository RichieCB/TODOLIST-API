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
    require('./users/users.router'),
    require('./tasks/tasks.router'),
    require('./subtasks/subtasks.router'),
    require('./sessions/sessions.router')
]
