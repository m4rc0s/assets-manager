import express, {Express} from 'express'
import dotenv from 'dotenv'
import mongoose, { Schema } from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

import AssetsRouter from './Router'
import LoginRouter from './services/auth/LoginRouter'
import PersonRouter from './services/person/PersonService'
import BankAccountService from './services/bank-account/BankAccountService'
import ReportsService from './services/reports/ReportsService'

dotenv.config()

const PORT = Number(process.env.PORT) || 9000
const PROTOCOL = process.env.PROTOCOL || 'http'
const DOMAIN = process.env.DOMAIN || 'localhost'
const HOSTNAME = `${PROTOCOL}://${DOMAIN}`
const BASE_URL = `${HOSTNAME}:${PORT}`
const SERVICE_NAME = process.env.SERVICE_NAME
const PROFILES_ACTIVE = process.env.PROFILES_ACTIVE

const app: Express = express()

console.log(`Initializing ${SERVICE_NAME} service.`)
// parse application/x-www-form-urlencoded

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(AssetsRouter)
app.use("/auth", LoginRouter)
app.use("/persons", PersonRouter)
app.use("/bank-account", BankAccountService)

app.listen(PORT, DOMAIN, () => {
    initDb()
    console.log(`Service started with active profile ${PROFILES_ACTIVE}.`)
    console.log(`Listen on ${BASE_URL}`)
})

const initDb = () => {
    mongoose.connect("mongodb://admin:admin@localhost:27017")
}
