import mongoose, { model } from 'mongoose'

const serverCollection = 'servers'
const serverSchema = mongoose.Schema({
    url: String,
    port: Number,
})

export const serverModel = mongoose.model(serverCollection, serverSchema)

