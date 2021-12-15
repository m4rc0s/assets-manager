import { Router } from 'express'
import HealthCheckResponse from './HealthCheckResponse'
import AssetModel from './model/AssetModel'
import Asset from './resources/Asset'

export default 
    Router()
        .get("/health-check", (request, response) => {
            response.json(new HealthCheckResponse())
        })
        .post("/assets", (request, response) => {
            let newAsset : Asset = {
                name: "NuBank",
                code: "NBNK",
                description: "Conta do NuBank",
                value: 250.00
            }

            let asset = new AssetModel(newAsset)

            asset.save((err: any, result: any) => {
                if (err) {
                    response.statusCode = 500 
                    response.send(err)
                } else {
                    response.send(result)
                }
            })
        })
