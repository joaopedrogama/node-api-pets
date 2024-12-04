import { FastifyInstance, FastifyPluginOptions } from "fastify";

import { UserRoute } from "../../../app/api/users/user.route";

export const IndexRoute = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    server.register(UserRoute, {prefix: '/users'})
};
