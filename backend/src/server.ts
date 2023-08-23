import v1Router from './api/v1/routes/router'
import express, { Application } from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import cors from 'cors'

const PORT: string = process.env.PORT || '3000'
const app: Application = express()
dotenv.config()
app.get('/', (req, res)=> {
    res.send('hello node')
})
mongoose.connect(`mongodb+srv://noahmilliken:creamfilling@oreocluster.kasbgor.mongodb.net/?retryWrites=true&w=majority`)
.then(()=> console.log('conected to mongo'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
console.log('test')

app.use('/api/v1/', v1Router)

app.listen(PORT, (): void => console.log(`Listening on port: ${PORT}`))
