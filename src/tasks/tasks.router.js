const Router = require('express').Router()
const Hub = require('./tasks.hub')

Router.post('/tasks', Hub.createTask)

Router.get('/tasks', Hub.getTasks)

Router.get('/tasks/:taskId', Hub.getTask)

Router.put('/tasks/:taskId', Hub.updateTask)

Router.delete('/tasks/:taskId', Hub.deleteTask)

module.exports = Router