import { Router } from 'express'

import { message } from '../controllers/about'
import { sample } from '../middlewares/sample'

const about = Router()

about.get('/', sample, message)

export default about