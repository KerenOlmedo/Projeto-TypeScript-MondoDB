import { Router } from "express";
import UserController from "../controller/userController";

const routesUser = Router()

routesUser.get('/', UserController.getAll)

export default routesUser