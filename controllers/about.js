const message = (req, res) => {
    res.send({
        message: 'This is the about route.'
    })
}

module.exports = { message }