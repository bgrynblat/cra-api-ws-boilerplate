import { BRoute, BRouteWebsocketHandler } from '../types'
import cors from '../middlewares/cors'
import auth from '../middlewares/auth'

const route:BRoute = {
    routes: {
        "status": {
            get: (request, response) => {
                response.status(200).send({status: "OK"})
            }
        },
        "whoami": {
            get: (request, response) => {
                response.status(200).send(request.user)
            },
            middlewares: [auth]
        }
    },
    middlewares: [cors]
}

export default route