module.exports = function($details, $message){
    return {
        serverError: {
            code: 503,
            key: 'serverError',
            message: $message || 'Error en el servidor',
            $details
        },

        serverNotFound: {
            code: 404,
            key: 'serverNotFound',
            message: $message || 'Recurso no encontrado',
            $details
        },
    }

}