const Characters = require("../database/models/Characters");
const Locations = require("../database/models/Locations");
const Episodes = require("../database/models/Episodes");

const charactersJsonData = require("./characters.json");
const locationsJsonData = require("./locations.json");
const episodesJsonData = require("./episodes.json");

//Episodes Seed Data
const episodesSeedData = episodesJsonData.map(episodesRawItem => {
  const episodesSeedItem = {};

  episodesSeedItem.id = episodesRawItem.id;
  episodesSeedItem.name = episodesRawItem.name;
  episodesSeedItem.air_date = episodesRawItem.air_date;
  episodesSeedItem.episode = episodesRawItem.episode;
  episodesSeedItem.url = episodesRawItem.url;

  return episodesSeedItem;
});

//Charaters Seed Data
Characters.deleteMany({}).then(() => {
  console.log("deleted all characters and created new characters");

  Characters.create(charactersJsonData).then(characters => {
    console.log(characters);
  });
});

//Episodes Seed Data
Episodes.deleteMany({}).then(() => {
  console.log("deleted all episodes and created new episodes");

  Episodes.create(episodesSeedData).then(episodes => {
    console.log(episodes);
  });
});

//Locations Seed Data
Locations.deleteMany({}).then(() => {
  console.log("deleted all locations and created new locations");

  Locations.create(locationsJsonData)
    .then(locations => {
      console.log(locations);
    })
    .catch(err => {
      console.log(err);
    });
});
