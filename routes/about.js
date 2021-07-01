const about = require('express').Router()

const { message } = require('../controllers/about')
const { sample } = require('../middlewares/sample')

about.get('/', sample, message)

module.exports = { about }