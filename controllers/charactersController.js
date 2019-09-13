const Characters = require("../database/models/Characters");

module.exports = {
  index: (req, res) => {
    Characters.find({})
    .then(character => {
      res.json(character);
    });
  },
  // create: (req, res) => {
  //   //its good practice to put this after the index or get request
  //   const newCharacters = req.body;
  //   Characters.create(newCharacters).then(character => res.json(character));
  // },
  // personId: (req, res) => {
  //   Characters.findOne({ id: req.params.id }).then(character => res.json(character));
  // },
  // personName: (req, res) => {
  //   const updatedCharacter = req.body;
  //   Characters.findOneAndUpdate({ name: req.params.name }, updatedCharacter, {
  //     new: true
  //   }).then(character => res.json(character));
  // },
  // editId: (req, res) => {
  //   Characters.findOneAndDelete({ id: req.params.id }).then(character =>
  //     res.json(character)
  //   );
  // },
  // deleteId: (req, res) => {
  //   Characters.findOneAndDelete({ id: req.params.id }).then(character =>
  //     res.json(character)
  //   );
  // }
};
