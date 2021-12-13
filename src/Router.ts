import { Router } from 'express'
import HealthCheckResponse from './HealthCheckResponse'

export default 
    Router().get("/health-check", (request, response) => {
        response.json(new HealthCheckResponse())
    })
