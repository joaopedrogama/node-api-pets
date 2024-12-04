import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import { UserController }  from "./user.controller";


export const UserRoute: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    const userControler = new UserController()

    server.post('/', userControler.create)
    server.post('/login', userControler.login)
}
