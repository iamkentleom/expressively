const routes = require('express').Router()

const { home } = require('./routes/home')
const { about } = require('./routes/about')

routes.use('/', home)
routes.use('/about', about)

module.exports = { routes }