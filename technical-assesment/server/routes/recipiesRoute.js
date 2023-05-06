const express = require("express");
const router = express.Router();
const { getrecepie, addrecepie, deleterecepie, updaterecepie, searchrecepie }=require("../controller/recipiesController")

router.get("/api/menuItems", getrecepie);
router.get("/api/recepies/search", searchrecepie)

router.post("/api/recepies", addrecepie)
router.delete("/api/recepies/:id", deleterecepie)
router.put("/api/recepies/:id", updaterecepie)


module.exports = router;
