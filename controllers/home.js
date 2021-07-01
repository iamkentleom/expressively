const { version } = require('../models/version')

const message = (req, res) => {
    res.send({
        message: `Welcome to expressively v${ version() }!`
    })
}

module.exports = { message }