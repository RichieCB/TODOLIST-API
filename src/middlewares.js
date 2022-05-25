const Messages = require('./messages')
const Sessions = require('./sessions/sessions.service')
module.exports = {
    auth,
    notFound,
    serverError
}

async function auth(req, res, next) {
    try {

        const token = req.headers.token
    
        if(!token)
            return res.$error( Messages().tokenRequiredError )
    
        const session = await Sessions.findSession(token)

        if(!session)
            return res.$error( Messages().tokenNotFound )

        if(new Date() > session.expired)
            return res.$error( Messages().tokenExpiredError )

        req.userId = session.userId
    
        next()

    } catch(error) {
        res.$error(error)
    }
}

async function notFound(req, res) {

    res.$error(Messages().serverNotFound)

}

async function serverError(error, req, res, next) {

    res.$error(Messages().serverError)

}

