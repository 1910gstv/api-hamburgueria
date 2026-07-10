import { Router } from "express";
import { productControllerFactory } from "../infra/factories/ProductControllerFactory";

const productRoutes = Router();
const productController = productControllerFactory();

productRoutes.post("/create", (req, res) => productController.createProduct(req, res));

export { productRoutes };