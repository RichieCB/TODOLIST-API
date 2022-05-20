const Messages = require('./messages')
module.exports = {
    notFound,
    serverError
}

async function notFound(req, res) {

    res.$error(Messages().serverNotFound)

}

async function serverError(error, req, res, next) {

    res.$error(Messages().serverError)

}