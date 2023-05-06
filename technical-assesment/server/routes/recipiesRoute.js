const express = require("express");
const router = express.Router();
const { getrecepie, addrecepie, deleterecepie }=require("../controller/recipiesController")

router.get("/api/menuItems", getrecepie);
router.post("/api/recepies", addrecepie)
router.delete("/api/recepies/:id", deleterecepie)


module.exports = router;
