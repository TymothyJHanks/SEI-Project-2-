const Episodes = require("../database/models/Episodes");

module.exports = {
  index: (req, res) => {
    Episodes.find({})
    .populate("charactersCreated")
    .then(episode => {
      res.json(episode);
    });
  }
  // create: (req, res) => {
  //   //its good practice to put this after the index or get request
  //   const newEpisodes = req.body;
  //   Episodes.create(newEpisodes).then(episode => res.json(episode));
  // },
  // personId: (req, res) => {
  //   Episodes.findOne({ id: req.params.id }).then(episode => res.json(episode));
  // },
  // personName: (req, res) => {
  //   const updatedEpisodes = req.body;
  //   Episodes.findOneAndUpdate({ name: req.params.name }, updatedEpisodes, {
  //     new: true
  //   }).then(episode => res.json(episode));
  // },
  // editId: (req, res) => {
  //   Episodes.findOneAndDelete({ id: req.params.id }).then(episode =>
  //     res.json(episode)
  //   );
  // },
  // deleteId: (req, res) => {
  //   Episodes.findOneAndDelete({ id: req.params.id }).then(episode =>
  //     res.json(episode)
  //   );
  // }
};
