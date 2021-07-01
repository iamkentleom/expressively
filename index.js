require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { routes } = require('./routes')

const app = express()
const server = require('http').createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/', routes)

io.on('connection', user => {
    console.log(user)
})

server.listen(port, () => {
    console.log(`listening on *:${ port }`)
})