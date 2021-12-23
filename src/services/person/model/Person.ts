import { Schema, Model, model } from "mongoose"

export interface IPersonModel {
    firstName: String,
    lastName: String,
    documentNumber: String,
    assets: Array<any>,
    email: String
}

const PersonSchema = new Schema<IPersonModel, Model<IPersonModel>>({
    firstName: String,
    lastName: String,
    documentNumber: String,
    assets: [],
    email: String
})

const PersonModel = model("Person", PersonSchema)

export default PersonModel