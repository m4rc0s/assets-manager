import { Schema, Model, model } from 'mongoose'

export interface ILoginModel {
    id: any,
    username: String,
    password: String
}

const LoginSchema = new Schema<ILoginModel, Model<ILoginModel>>(
    {
        id: { type: Schema.Types.ObjectId, required: false },
        username: String,
        password: String
    }
)

const LoginModel = model("Login", LoginSchema)

export default LoginModel