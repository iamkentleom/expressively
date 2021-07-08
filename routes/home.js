import { Router } from 'express'

import { message } from '../controllers/home'

const home = Router()

home.get('/', message)

export default home