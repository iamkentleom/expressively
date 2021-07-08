const sample = (req, res, next) => {
    console.log("This is a sample middleware.")
    next()
}

export { sample }