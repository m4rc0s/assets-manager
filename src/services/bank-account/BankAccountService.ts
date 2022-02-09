import BankAccountModel, {
  IBankAccountModel,
} from '../../model/BankAccountModel'
import { Router } from 'express'

export default Router()
  .post('/', async (req, res) => {
    const bankAccountData = req.body as IBankAccountModel
    const bankAccount = new BankAccountModel(bankAccountData)
    const accountCreated = await bankAccount.save()
    res.status(201).json(accountCreated)
  })
  .get('/', (req, res) => {
    res.send(400).json({
      message: 'not ready yet',
    })
  })
