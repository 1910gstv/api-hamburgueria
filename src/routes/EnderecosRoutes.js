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

router.get("/getAllAdresses", getAllAdresses);
router.get("/address/:id", getAddressById);
router.post("/createAddress", createAddress);
router.put("/updateAddress/:id", updateAddress);
router.delete("/deleteAddress/:id", deleteAddress);

module.exports = router;
