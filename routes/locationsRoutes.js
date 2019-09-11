const express = require("express");
const router = express.Router();
const locationsController = require("../controllers/locationsController");

// add routes here
router.get("/",locationsController.index); //List all shows/people
router.get("/:id",locationsController.personId);//List a single show/person by id
router.get("/:name",locationsController.personName);//List a single show/person by name
router.post("/",locationsController.create);//Create a show/person
router.put("/:id",locationsController.editId);//Update a single show/person by id
router.delete("/:id",locationsController.deleteId);//Delete a show/person by id

module.exports = router;
