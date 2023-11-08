import { serverModel } from '../models/server.js'
import { utils } from '../../utils.js'
import { MongooseDriver } from '../DbDrivers/mongooseDrivers.js'

const dbDriver = new MongooseDriver(serverModel)

const getServers = async() => {
    let response = await dbDriver.find()
    return response
}

const getStatus = async() => {
    const servers = await statusServerAppServices.getServers()
    const data = []
        for(const server of servers){
            try {
                const serverStatus = await fetch(server.url, {signal: AbortSignal.timeout(5000)})
                const isSuccessful = serverStatus.ok
                if(isSuccessful){
                    data.push({"url": server.url, "status": "online", "id": server._id})
                }
            } catch (err) {
                data.push({ "url": server.url, "status": "offline", "id": server._id})
            }
        }
    return data
}

const postServer = async(body) => {
    const {url, port} = body
    let response = await dbDriver.create(
        {
            url,
            port
        }
    )
    return response
}

const deleteServer = async(body) => {
    const { id } = body
    let response = await dbDriver.delete(id)
    return response
}

export const statusServerAppServices = {
    getServers,
    getStatus,
    postServer,
    deleteServer
}

