const { Router } = require("express");
const express = require("express");
const app = express();

const {
    getAllProducts,
    getProductPerId,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/ProdutoController");

const router = Router();

router.get("/getProducts", getAllProducts);
router.get("/getProductPerId/:id", getProductPerId);
router.post("/createProduct", createProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
