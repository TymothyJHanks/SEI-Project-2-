const Episodes = require("../database/models/Episodes");
const Characters = require("../database/models/Characters");
module.exports = {
  index: (req, res) => {
    Episodes.find({})
      .populate("characters", {name:1, gender:1, _id:0})
      .then(episode => {
        res.json(episode);
      });
  },
  create: (req, res) => {
    //its good practice to put this after the index or get request
    const newEpisodes = req.body;
    Episodes.create(newEpisodes)
    .then(episode => res.json(episode));
  },
  episodeId: (req, res) => {
    Episodes.findOne({ id: req.params.id })
      .populate("characters")
      .then(episode => res.json(episode));
  },
  episodeName: (req, res) => {
    Episodes.findOne({ name: req.params.name })
      .populate("characters")
      .then(episode => res.json(episode));
  },
  updateEpisodeId: (req, res) => {
    const updatedEpisode = req.body;
    Episodes.findOneAndUpdate({ id: req.params.id }, updatedEpisode, {
      new: true
    })
      .populate("characters")
      .then(episode => res.json(episode));
  },
  deleteEpisodeId: (req, res) => {
    Episodes.findOneAndDelete({ id: req.params.id })
    .populate("characters")
    .then(episode =>
      res.json(episode)
    );
  }
}