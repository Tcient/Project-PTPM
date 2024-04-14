import express from 'express'
import { mediaRoutes } from './media.routes.js'

const Router = express.Router()

Router.get('/status', (req, res) => { 
 res.status(200).json({message: 'APIs  V1 are ready to use .'})
})

Router.use('/:mediatype', mediaRoutes)

export const APIs_V1 = Router