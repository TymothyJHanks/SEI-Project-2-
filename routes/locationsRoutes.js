const express = require("express");
const router = express.Router();
const locationsController = require("../controllers/locationsController");

// add routes here
router.get("/",locationsController.index);
router.get("/:id",locationsController.locationsId);
router.get("/:name",locationsController.locationsName);
router.post("/",locationsController.create);
router.put("/:id",locationsController.updateLocationsId);
router.delete("/:id",locationsController.deleteLocationsId);

module.exports = router;

//all these works 