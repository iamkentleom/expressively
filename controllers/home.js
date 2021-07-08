import { version } from '../models/version'

const message = (req, res) => {
    res.send({
        message: `Welcome to expressively v${ version() }!`
    })
}

export { message } 