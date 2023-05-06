const express = require("express");
const router = express.Router();
const { getrecepie, addrecepie, deleterecepie, updaterecepie, searchrecepie,favoriterecepie, deletefavorite, getfavorites, getOneRecepie }=require("../controller/recipiesController")

router.get("/api/menuItems", getrecepie);
router.get("/api/recepies/search", searchrecepie)
router.get("/api/favorites/:userid", getfavorites)
router.get("/api/recepies/:recid", getOneRecepie)

router.post("/api/favorites/:userid/:recid", favoriterecepie)
router.post("/api/recepies", addrecepie)

router.delete("/api/recepies/:id", deleterecepie)
router.delete("/api/favorites/:userid/:recid", deletefavorite)

router.put("/api/recepies/:id", updaterecepie)


module.exports = router;
