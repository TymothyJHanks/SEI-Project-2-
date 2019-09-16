const Locations = require("../database/models/Locations");

module.exports = {
  index: (req, res) => {
    Locations.find({})
    .then(location => {
      res.json(location);
    });
  },
  create: (req, res) => {
    //its good practice to put this after the index or get request
    const newLocations = req.body;
    Locations.create(newLocations).then(locations => res.json(locations));
  },
  locationsId: (req, res) => {
    Locations.findOne({ id: req.params.id })
      .then(locations => res.json(locations));
  },
  locationsName: (req, res) => {
    Locations.findOne({ name: req.params.name })
      .then(locations => res.json(locations));
  },
  updateLocationsId: (req, res) => {
    const updatedLocations = req.body;
    Locations.findOneAndUpdate({ id: req.params.id }, updatedLocations, {
      new: true
    })
      .then(locations => res.json(locations));
  },
  deleteLocationsId: (req, res) => {
    Locations.findOneAndDelete({ id: req.params.id })
    .then(locations =>
      res.json(locations)
    );
  }
};
