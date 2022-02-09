import { Model, Schema, model } from 'mongoose'

export interface IBankAccountHolder {
  personId: string
}

export interface IBankAccountModel {
  name: string
  branch: string
  accountNumber: string
  digit: string
  bankCode: string
  customCode: string
  description: string
  holder: any
  totalAmount: number
}

const BankAccountSchema = new Schema<
  IBankAccountModel,
  Model<IBankAccountModel>
>({
  name: String,
  branch: String,
  accountNumber: String,
  digit: String,
  bankCode: String,
  customCode: String,
  description: String,
  holder: {} as IBankAccountHolder,
  totalAmount: Number,
})

const BankAccountModel = model('BankAccount', BankAccountSchema)

export default BankAccountModel
