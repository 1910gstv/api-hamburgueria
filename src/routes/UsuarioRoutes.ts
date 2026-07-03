import { Router } from "express";
import { userControllerFactory } from "../infra/factories/UserControllerFactory";

const userRoutes = Router();
const userController = userControllerFactory();

userRoutes.post("/", (req, res) => userController.createUser(req, res));
userRoutes.post("/login", (req, res) => userController.login(req, res));

export { userRoutes };