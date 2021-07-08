import { Router } from 'express'

import home from './home'
import about from './about'

const routes = Router()

routes.use('/', home)
routes.use('/about', about)

export default routes