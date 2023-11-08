import express from 'express'
import morgan from 'morgan'
import Cors from 'cors'
import mongoose from 'mongoose'
import { statusServerAppRouter } from './routes/statusServerAppRoutes.js'


const app = express()
mongoose.connect("mongodb://127.0.0.1:27017/server")

app.use(morgan())
app.use(express.json())
app.use(Cors())
app.use((requests, response, next) => {
                                        if(requests.body && requests.body._method){
                                            requests.method = requests.body._method
                                            delete requests.body._method
                                        }
                                        next()
})
app.use('/api/v1/serverstatusapp', statusServerAppRouter)
app.use('*', (requests, response, next) => {
    const err = new Error(`Can't find ${requests.originalUrl} on the server`)
    err.status = 'fail'
    err.statusCode = 404
    next(err)
})

//Global Error Middleware
app.use((err, requests, response, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'
    response.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message
    })
})
//

app.listen(8080, () => console.log('Server in port 8080'))
