const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/charactersController");

// add routes here
router.get("/",charactersController.index); //List all character
router.get("/:id",charactersController.characterId);//List a single character by id
router.get("/:name",charactersController.characterName);//List a single character by name
router.post("/",charactersController.create);//Create an character
router.put("/:id",charactersController.updateCharacterId);//Update a single character by id
router.delete("/:id",charactersController.deleteCharacterId);//Delete a character by id

module.exports = router;
