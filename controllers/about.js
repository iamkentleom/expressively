const message = (req, res) => {
    res.send({
        message: 'This is the about route.'
    })
}

export { message }