import express, {Express} from 'express'
import dotenv from 'dotenv'

import router from './Router'

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

app.use(router)

app.listen(PORT, DOMAIN, () => {
    console.log(`Service started with active profile ${PROFILES_ACTIVE}.`)
    console.log(`Listen on ${BASE_URL}`)
})

