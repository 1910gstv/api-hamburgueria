const { Router } = require("express");
const express = require("express");
const app = express();

const {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
} = require("../controllers/PedidoController");

const router = Router();

router.get("/getAllOrders", getAllOrders);
router.get("/getOrder/:id", getOrderById);
router.post("/createOrder", createOrder);
router.put("/updateOrder/:id", updateOrder);
router.delete("/deleteOrder/:id", deleteOrder);

module.exports = router;
