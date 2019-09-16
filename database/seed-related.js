const Characters = require("../database/models/Characters");
const Locations = require("../database/models/Locations");
const Episodes = require("../database/models/Episodes");

const charactersJsonData = require("./characters.json");
const locationsJsonData = require("./locations.json");
const episodesJsonData = require("./episodes.json");

Episodes.find({})
  .then(episodesDB => {
    episodesDB.forEach(episodesDocument => {
      const episodesJson = episodesJsonData.find(episodesJsonItem => {
        return episodesJsonItem.name === episodesDocument.name;
      });
      Characters.findOne({ title: episodesJson.gender })
        .then(charactersDocument => {
          episodesDocument.characters = charactersDocument._id;
          episodesDocument.save();
          console.log(episodesDocument);
        })
        .catch(err => console.log(err));
    });
  })
  .catch(err => console.log(err));
