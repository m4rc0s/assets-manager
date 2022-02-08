import { Schema, Model, model } from "mongoose"

export interface IBankAccountHolder {
    personId: String
}

export interface IBankAccountModel {
    name: String,
    branch: String,
    accountNumber: String,
    digit: String,
    bankCode: String,
    customCode: String,
    description: String,
    holder: any,
    totalAmount: Number
}

const BankAccountSchema = new Schema<IBankAccountModel, Model<IBankAccountModel>>({
    name: String,
    branch: String,
    accountNumber: String,
    digit: String,
    bankCode: String,
    customCode: String,
    description: String,
    holder: {} as IBankAccountHolder,
    totalAmount: Number
})

const BankAccountModel = model("BankAccount", BankAccountSchema)

export default BankAccountModel