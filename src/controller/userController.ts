
import UserService from "../service/userService";

class UserController {
    async getAll(req: Request, res: any): Promise<any>{
        try {
            const users = await UserService.getAll()
            res.json(users).status(200)
        } catch (error) {
            res.send(error).status(400)
        }

    }
}

export default new UserController()