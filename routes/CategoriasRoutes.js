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

router.get("/allCategories", getAllCategories);
router.get("/categories/:id", getCategoryPerId);
router.post("/categories", createCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

module.exports = router;
