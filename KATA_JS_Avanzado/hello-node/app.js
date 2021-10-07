const http = require('http')

const hostName = '127.0.0.1'
const port = 3002

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World! This is a change')
})

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`)
})

