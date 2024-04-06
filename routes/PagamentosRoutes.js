const { Router } = require("express");
const express = require("express");
const app = express();

const {
  getPayments,
  createPayment,
  updatePayment,
  deletePayment,
} = require("../controllers/PagamentoController");

const router = Router();

router.get("/getPayments", getPayments)
router.post("/createPayment", createPayment)
router.put("/updatePayment/:id", updatePayment)
router.deçete("/deletePayment/:id", deletePayment)

module.exports = router;