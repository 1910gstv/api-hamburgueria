const { Router } = require("express");
const express = require("express");
const app = express();

const {
    getAllUsers,
    getUserPerId,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/UsuarioController");

const router = Router();

router.get("/getUsers", getAllUsers);
router.get("/getUserPerId/:id", getUserPerId);
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
