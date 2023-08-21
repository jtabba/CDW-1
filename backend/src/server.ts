import v1Router from './api/v1/routes/router'
import express, { Application } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

const PORT: string = process.env.PORT || '3000'
const app: Application = express()
dotenv.config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/api/v1/', v1Router)

app.listen(PORT, (): void => console.log(`Listening on port: ${PORT}`))
