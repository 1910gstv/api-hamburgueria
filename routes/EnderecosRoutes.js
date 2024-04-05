const { Router } = require("express");
const express = require("express");
const app = express();

const {
  getAllAdresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress,
} = require("../controllers/EnderecoController");

const router = Router();

router.get("/allAdresses", getAllAdresses);
router.get("/address/:id", getAddressById);
router.post("/address", createAddress);
router.put("/address/:id", updateAddress);
router.delete("/address/:id", deleteAddress);

module.exports = router;
