import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import UserController  from "./user.controller";
import passport from "passport";


export const UserRoute: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    const userControler = new UserController()

    server.post('/', userControler.create)
    server.post('/login', userControler.login)
}
