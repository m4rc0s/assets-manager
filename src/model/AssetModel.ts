import mongoose, { Schema } from 'mongoose'

const AssetModel = mongoose.model("Assets", new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: false },
    code: String,
    name: String,
    description: String,
    value: Number
}))

export default AssetModel