import { FastifyRequest, FastifyReply } from "fastify"

class UserController {

    async create(request: FastifyRequest, reply: FastifyReply) {
        try {
            reply.send('create user')
        } catch (error) {
            console.log(error)
        }
    }

}

export default new UserController
