import { statusServerAppServices } from '../services/statusServerAppServices.js'

const itsALive = (requests, response) => {
    response.status(200).send("ist a live")
}

const getServers = async(requests, response) => {
    try {
        const query = await statusServerAppServices.getServers()
        response.status(200).json(query)
    } catch (err) {
        response.json({
            status: 500,
            message: err.message
        })
    }
}

const getStatus = async(requests, response) => {
    try {
        const serverStatus = await statusServerAppServices.getStatus()
        response.status(200).json(serverStatus)
    } catch (err) {
        response.json({
            status: 500,
            message: err.message
        })
    }
}

const postServer = async(requests, response) => {
    const body = requests.body
    try {
        const query = await statusServerAppServices.postServer(body)
        response.status(200).json({status: 200, payload: query})
    } catch (err) {
        response.json({
            status: 500,
            message: err.message
        })
    }
}

const deleteServer = async(requests, response) => {
    const body = requests.body
    try {
        const query = await statusServerAppServices.deleteServer(body)
        response.status(201).json({status: 201, payload: query})
    } catch (err) {
        response.json({
            status: 500,
            message: err.message
        })    
    }
}

export const statusServerAppController = {
    itsALive,
    getServers,
    getStatus,
    postServer,
    deleteServer
}