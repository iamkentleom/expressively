import { config } from 'dotenv'

config()

import express, { json } from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import routes from './routes'

const app = express()
const server = createServer(app)
const io = new Server(server)

const port = process.env.PORT

app.use(cors())
app.use(json())

app.use('/', routes)

io.on('connection', user => {
    console.log(user)
})

server.listen(port, () => {
    console.log(`Server is running at *:${ port } in ${ process.env.NODE_ENV } mode`)
    console.log('Press CTRL-C to stop');
})