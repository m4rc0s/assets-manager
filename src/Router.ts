import { Router } from 'express'
import HealthCheckResponse from './HealthCheckResponse'
import AssetModel from './model/AssetModel'
import Asset from './resources/Asset'

export default Router()
  .get('/health-check', (request, response) => {
    response.json(new HealthCheckResponse())
  })
  .post('/assets', (request, response) => {
    console.log('Request: ', request)
    const newAsset: Asset = request.body as Asset

    const asset = new AssetModel(newAsset)

    asset.save((err: any, result: any) => {
      if (err) {
        response.statusCode = 500
        response.send(err)
      } else {
        response.send(result)
      }
    })
  })
  .get('/assets', async (request, response) => {
    const assets = await AssetModel.find()
    response.send(assets)
  })
