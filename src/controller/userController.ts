import { UserDto } from "../dto/userDto";
import HttpResponse from "../helpers/http-response";
import UserService from "../service/userService";

class UserController {
    async getAll(req: Request, res: any): Promise<any>{
        try {
            const users = await UserService.getAll()
            res.send(HttpResponse.ok(users))
        } catch (error) {
            res.send(HttpResponse.badRequest(error))
        }
    }

    async create(req: any, res: any) {
        try {
            const user: UserDto = req.body
            const userCreated: UserDto = await UserService.create(user)
            res.send(HttpResponse.ok(userCreated))
        } catch (error: any) {
            res.send(HttpResponse.badRequest(error))
        }
    }
}

export default new UserController()