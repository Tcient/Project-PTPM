import express from  'express'
import { mediaController } from '../../controllers/media.controllers.js'

const Router = express.Router()

Router.route('/trending/:timeWindow')
  .get(mediaController.getTrending)

export const mediaRoutes = Router 