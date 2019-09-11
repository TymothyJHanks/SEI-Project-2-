const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/charactersController");

// add routes here
router.get("/",charactersController.index); //List all shows/people
router.get("/:id",charactersController.personId);//List a single show/person by id
router.get("/:name",charactersController.personName);//List a single show/person by name
router.post("/",charactersController.create);//Create a show/person
router.put("/:id",charactersController.editId);//Update a single show/person by id
router.delete("/:id",charactersController.deleteId);//Delete a show/person by id

module.exports = router;
