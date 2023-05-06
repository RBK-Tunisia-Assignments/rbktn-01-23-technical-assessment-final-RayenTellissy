const express = require("express");
const router = express.Router();
const { getrecepie, addrecepie, deleterecepie, updaterecepie }=require("../controller/recipiesController")

router.get("/api/menuItems", getrecepie);
router.post("/api/recepies", addrecepie)
router.delete("/api/recepies/:id", deleterecepie)
router.put("/api/recepies/:id", updaterecepie)


module.exports = router;
