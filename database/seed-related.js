const Locations = require("../database/models/Locations");
const Episodes = require("../database/models/Episodes");
const Characters = require("../database/models/Characters");

const locationsJsonData = require("../database/locations.json");
const episodesJsonData = require("../database/episodes.json");
const charactersJsonData = require("../database/characters.json");

//Episodes Seed Data //this goes first because the Locatons seed needs this before it starts its seeding process
Episodes.deleteMany({}).then(() => {
  console.log("deleted all episodes");
  //place create/delete/functions here

  Episodes.create(episodesJsonData)
    .then(episodes => {
      // Episodes.save();
      console.log(episodes);
    })
    .catch(err => {
      console.log(err);
    });
});

Locations.deleteMany({}).then(() => {
  Locations.find({}).then(locationsDB => {
    // console.log(monarchsDB)

    //iterate or loop through each monarch in monarchDB
    locationsDB.forEach(locationsDocument => {
      //monarchDocument is the single monarch from our database
      //we will make a new variable to find the original JSON object
      const locationsJson = locationsJsonData.find(
        locationsJsonItem =>
          locationsJsonItem.episodes === locationsDocument.episodes
      );

      // console.log(monarchDocument);
      // console.log(monarchJson);

      Episodes.findOne({ episode: locationsJson.episodes }).then(
        episodesDocument => {
          // console.log(monarchJson.kingdom);
          // console.log(kingdomDocument);
          locationsDocument.episodes = episodesDocument._id;
          locationsDocument.save();
        }
      );
    });
  });
});

//Charaters Seed Data
Characters.deleteMany({}).then(() => {
  console.log("deleted all characters");
  //place create/delete/functions here

  Characters.create(charactersJsonData)
    .then(characters => {
      // Characters.save();
      console.log(characters);
    })
    .catch(err => {
      console.log(err);
    });
});
