const validator = require('../validator')

module.exports = function(req) {

    const props = {...req.headers, ...req.params, ...req.query, ...req.body}

    this.taskId = validator({
        type: 'objectId',
        value: props.taskId,
        name: 'identificador'
    })

    this.userId = validator({
        type: 'objectId',
        value: props.userId,
        name: 'identificador del usuario'
    })

    this.name = validator({
        type: 'string',
        value: props.name,
        name: 'nombre de la tarea'
    })

    this.description = validator({
        type: 'string',
        value: props.description,
        name: 'descripción'
    })

    this.label = validator({
        type: 'string',
        value: props.label,
        name: 'etiqueta',
        required: false
    })

    this.category = validator({
        type: 'string',
        value: props.category,
        name: 'categoría'
    })

    this.date = validator({
        type: 'date',
        value: props.date,
        name: 'fecha tarea'
    })
    

    return this
}