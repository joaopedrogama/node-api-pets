import { FastifyInstance, FastifyPluginOptions } from "fastify";

import { UserRoute } from "../../../modules/users/routes/UserRoute";

export const IndexRoute = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    server.register(UserRoute, {prefix: '/users'})
};
