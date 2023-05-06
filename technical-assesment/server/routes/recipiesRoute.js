const express = require("express");
const router = express.Router();
const { getrecepie }=require("../controller/recipiesController")

router.get("/", getrecepie);


module.exports = router;
