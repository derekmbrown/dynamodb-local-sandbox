const hapi = require('hapi')

const server = hapi.server({
    port: 3000,
    host: '0.0.0.0'
})

server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => {
        return 'Server running.'
    }
})

server.start()
console.log('Server running.')