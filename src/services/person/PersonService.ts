import { Router } from 'express'

import { IBankAccountModel } from '../../model/BankAccountModel'
import Asset from '../../resources/Asset'
import PersonModel from './model/Person'

export default Router()
  .post('/', async (request, response) => {
    console.log('request: ', request.body)
    const personData = request.body

    const person = new PersonModel(personData)

    console.log('Person: ', person)

    const personCreated = await person.save()

    console.log('Pessoa criada: ', personCreated)

    response.status(201).json(personCreated)
  })
  .post('/:id/assets', async (request, response) => {
    const personId = request.params.id
    const assetData: Asset = request.body as Asset

    const person = await PersonModel.findById(personId)

    person?.assets.push(assetData)

    await person?.save()

    return response.status(200).json(person)
  })
  .get('/:id/assets', async (request, response) => {
    const personId = request.params.id
    const person = await PersonModel.findById(personId)

    const result = {
      items: person?.assets,
    }

    response.status(200).json(result)
  })
  .get('/:id/financial-status', async (request, response) => {
    const personId = request.params.id
    const person = await PersonModel.findById(personId)

    const total = person?.assets.reduce((acc, curr) => acc + curr.value, 0)

    console.log(total)

    const result = {
      assets: person?.assets.map(item => {
        return { code: item.code, value: item.value }
      }),
      totalAmount: total,
    }

    response.status(200).json(result)
  })
  .post('/:id/bank-accounts', async (req, res) => {
    const personId = req.params.id
    const person = await PersonModel.findById(personId)
    const bankAccountData: IBankAccountModel = req.body as IBankAccountModel

    person?.bankAccounts.push(bankAccountData)

    await person?.save()

    return res.status(200).json(person)
  })
  .get('/:id/bank-accounts', async (req, res) => {
    const person = await PersonModel.findById(req.params.id)
    const result = {
      items: person?.bankAccounts,
    }

    res.status(200).json(result)
  })
