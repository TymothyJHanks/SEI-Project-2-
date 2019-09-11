const express = require("express");
const router = express.Router();
const episodesController = require("../controllers/episodesController");

// add routes here
router.get("/",episodesController.index); //List all shows/people
router.get("/:id",episodesController.personId);//List a single show/person by id
router.get("/:name",episodesController.personName);//List a single show/person by name
router.post("/",episodesController.create);//Create a show/person
router.put("/:id",episodesController.editId);//Update a single show/person by id
router.delete("/:id",episodesController.deleteId);//Delete a show/person by id

module.exports = router;
