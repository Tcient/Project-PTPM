import { APIs_V1 } from './routes/v1/index.js'
import { APIs_V2 } from './routes/v2/index.js'

import express from 'express'
const app = express()
const port = 3000

app.use('/v1', APIs_V1)
app.use('/v2', APIs_V2)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})