const Router = require('express').Router()
const Hub = require('./subtasks.hub')

Router.post('/subtasks', Hub.createSubtask)

Router.get('/subtasks', Hub.getSubtasks)

Router.get('/subtasks/:subtaskId', Hub.getSubtask)

Router.put('/subtasks/:subtaskId', Hub.updateSubtask)

Router.delete('/subtasks/:subtaskId', Hub.deleteSubtask)

module.exports = Router