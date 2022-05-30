const validator = require('../validator')

module.exports = function(req) {

    const props = {...req.headers, ...req.params, ...req.query, ...req.body}

    this.subtaskId = validator({
        type: 'objectId',
        value: props.subtaskId,
        name: 'identificador subtarea'
    })

    this.taskId = validator({
        type: 'objectId',
        value: props.taskId,
        name: 'identificador de la tarea padre'
    })

    this.name = validator({
        type: 'string',
        value: props.name,
        name: 'nombre de la subtarea'
    })
    

    return this
}