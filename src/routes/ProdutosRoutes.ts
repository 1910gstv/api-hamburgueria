import { Router } from "express";
import { productControllerFactory } from "../infra/factories/ProductControllerFactory";

const productRoutes = Router();
const productController = productControllerFactory();

productRoutes.post("/create", (req, res) => productController.createProduct(req, res));
productRoutes.get("/find/:id", (req, res) => productController.findByIdProduct(req, res));

export { productRoutes };