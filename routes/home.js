const home = require('express').Router()

const { message } = require('../controllers/home')

home.get('/', message)

module.exports = { home }