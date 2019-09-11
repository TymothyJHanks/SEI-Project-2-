const Locations = require("../database/models/Locations");

module.exports = {
  index: (req, res) => {
    Locations.find({}).then(location => {
      res.json(location);
    });
  },
  create: (req, res) => {
    //its good practice to put this after the index or get request
    const newLocations = req.body;
    Locations.create(newLocations).then(location => res.json(location));
  },
  personId: (req, res) => {
    Locations.findOne({ id: req.params.id }).then(location => res.json(location));
  },
  personName: (req, res) => {
    const updatedLocations = req.body;
    Locations.findOneAndUpdate({ name: req.params.name }, updatedLocations, {
      new: true
    }).then(location => res.json(location));
  },
  editId: (req, res) => {
    Locations.findOneAndDelete({ id: req.params.id }).then(location =>
      res.json(location)
    );
  },
  deleteId: (req, res) => {
    Locations.findOneAndDelete({ id: req.params.id }).then(location =>
      res.json(location)
    );
  }
};
