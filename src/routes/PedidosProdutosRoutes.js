const { Router } = require("express");
const express = require("express");
const app = express();

const {
    getAllOrderProducts,
    getOrderProductPerId,
    createOrderProduct,
    updateOrderProduct,
    deleteOrderProduct
} = require("../controllers/PedidoProdutoController");

const router = Router();

router.get("/getAllOrderProducts", getAllOrderProducts);
router.get("/getOrderProduct/:id", getOrderProductPerId);
router.post("/createOrderProduct", createOrderProduct);
router.put("/updateOrderProduct/:id", updateOrderProduct);
router.delete("/deleteOrderProduct/:id", deleteOrderProduct);

module.exports = router;
