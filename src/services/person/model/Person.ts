import { Model, Schema, model } from 'mongoose'

export interface IPersonModel {
  firstName: string
  lastName: string
  documentNumber: string
  assets: Array<any>
  email: string
  bankAccounts: Array<any>
}

const PersonSchema = new Schema<IPersonModel, Model<IPersonModel>>({
  firstName: String,
  lastName: String,
  documentNumber: String,
  assets: [],
  email: String,
  bankAccounts: [],
})

const PersonModel = model('Person', PersonSchema)

export default PersonModel
