import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import UserController  from "../controllers/UserController";

export const UserRoute: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    server.get('/', UserController.create)
}
