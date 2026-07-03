const { Router } = require("express");
const express = require("express");
const app = express();

const {
  getAllCategories,
  getCategoryPerId,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoriaController");

const router = Router();

router.get("/getAllCategories", getAllCategories);
router.get("/getCategory/:id", getCategoryPerId);
router.post("/createCategory", createCategory);
router.put("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
