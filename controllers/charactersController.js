const Characters = require("../database/models/Characters");

module.exports = {
  index: (req, res) => {
    Characters.find({})
    .then(character => {
      res.json(character);
    });
  },
  create: (req, res) => {
    //its good practice to put this after the index or get request
    const newCharacters = req.body;
    Characters.create(newCharacters).then(character => res.json(character));
  },
  characterId: (req, res) => {
    Characters.findOne({ id: req.params.id })
      .then(character => res.json(character));
  },
  characterName: (req, res) => {
    Characters.findOne({ name: req.params.name })
      .then(character => res.json(character));
  },
  updateCharacterId: (req, res) => {
    const updatedCharacters = req.body;
    Characters.findOneAndUpdate({ id: req.params.id }, updatedCharacters, {
      new: true
    })
      .then(character => res.json(character));
  },
  deleteCharacterId: (req, res) => {
    Characters.findOneAndDelete({ id: req.params.id })
    .then(character =>
      res.json(character)
    );
  }
};
