import { Router } from "express"
import { statusServerAppController} from '../controllers/statusServerAppControllers.js'

export const statusServerAppRouter = Router()

statusServerAppRouter.get('/', statusServerAppController.itsALive)
statusServerAppRouter.get('/getservers', statusServerAppController.getServers)
statusServerAppRouter.get('/getstatus', statusServerAppController.getStatus)
statusServerAppRouter.post('/postserver', statusServerAppController.postServer)
statusServerAppRouter.delete('/deleteserver', statusServerAppController.deleteServer)