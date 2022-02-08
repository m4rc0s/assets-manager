import { Schema, Model, model } from "mongoose"

export interface IPersonModel {
    firstName: String,
    lastName: String,
    documentNumber: String,
    assets: Array<any>,
    email: String,
    bankAccounts: Array<any>
}

const PersonSchema = new Schema<IPersonModel, Model<IPersonModel>>({
    firstName: String,
    lastName: String,
    documentNumber: String,
    assets: [],
    email: String,
    bankAccounts: []
})

const PersonModel = model("Person", PersonSchema)

export default PersonModel