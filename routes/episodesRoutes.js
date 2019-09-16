const express = require("express");
const router = express.Router();
const episodesController = require("../controllers/episodesController");

// add routes here
router.get("/",episodesController.index); 
router.get("/:id",episodesController.episodeId);
router.get("/:name",episodesController.episodeName);
router.post("/",episodesController.create);
router.put("/:id",episodesController.updateEpisodeId);
router.delete("/:id",episodesController.deleteEpisodeId);

module.exports = router;


