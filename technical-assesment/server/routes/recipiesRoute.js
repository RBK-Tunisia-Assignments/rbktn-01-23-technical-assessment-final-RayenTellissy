const express = require("express");
const router = express.Router();
const { getrecepie, addrecepie }=require("../controller/recipiesController")

router.get("/api/menuItems", getrecepie);
router.post("/api/recepies", addrecepie)


module.exports = router;
