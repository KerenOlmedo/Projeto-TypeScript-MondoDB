import { Router } from "express";
import UserController from "../controller/userController";

const routesUser = Router()

routesUser.get('/', UserController.getAll)
routesUser.post('/', UserController.create)
// routesUser.put('/:email', UserController.update)
// routesUser.delete('/:email', UserController.delete)

export default routesUser