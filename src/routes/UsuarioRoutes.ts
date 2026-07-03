import { Router } from "express";
import { userControllerFactory } from "../infra/factories/UserControllerFactory";
import { auth } from "../infra/middlewares/auth";

const userRoutes = Router();
const userController = userControllerFactory();

userRoutes.post("/", (req, res) => userController.createUser(req, res));
userRoutes.post("/login", (req, res) => userController.login(req, res));
userRoutes.get("/oi", auth, (req, res) => {return res.status(201).json({msg: 'oi'})});

export { userRoutes };