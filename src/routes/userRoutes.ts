import { Router } from "express";
import UserController from "../controller/userController";
import userCreate from "../validation/userCreate";

const routesUser = Router();

routesUser.get("/", UserController.getAll);
routesUser.post("/", userCreate, UserController.create);
routesUser.put("/:email", UserController.update);
routesUser.delete("/:email", UserController.delete);

export default routesUser;
