import { FastifyRequest, FastifyReply } from "fastify";
import UserService from "./user.service";
import { UserDTO } from "./user.dto";

class UserController {
    private service: UserService;

    constructor() {
        this.service = new UserService();
    }

    create = async (request: FastifyRequest<{ Body: UserDTO }>, reply: FastifyReply) => {
        try {
            const result = await this.service.create(
                new UserDTO(
                    request.body.first_name,
                    request.body.last_name,
                    request.body.email,
                    request.body.password
                )
            );
            reply.status(201).send(result);
        } catch (error) {
            reply.send(error);
        }
    };

    login = async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            reply.send("login user");
        } catch (error) {
            console.log(error);
        }
    };
}

export default UserController;
