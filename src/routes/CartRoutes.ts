import { Router } from "express";
import { cartControllerFactory } from "../infra/factories/CartControllerFactory";

const cartRoutes = Router();
const cartController = cartControllerFactory();

cartRoutes.post("/create", (req, res) => cartController.createCart(req, res));
cartRoutes.get("/carts/:cartId", (req, res) => cartController.findCartById(req, res));

export { cartRoutes };