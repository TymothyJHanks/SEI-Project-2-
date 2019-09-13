const Characters = require("./models/Characters");
const Locations = require("./models/Locations");
const Episodes = require("./models/Episodes");

const charactersJsonData = require("./characters.json");
const locationsJsonData = require("./locations.json");
const episodesJsonData = require("./episodes.json");

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

Episodes.find({}).then(episodes => {
  console.log(episodes);
  episodes.forEach(episode => {
    let episodesJSON = episodesJsonData.find(
      episodesJSON => episodesJSON.name === episode.name
    );
    Characters.findOne({ title: episodesJSON.charactersCreated }).then(
      characters => {
        episode.characters = characters._id;
        episode.save();
      }
    );
  });
});

Locations.deleteMany({}).then(() => {
  console.log("deleting all locations");
  Locations.create(locationsJsonData)
    .then(locations => {
      // Episodes.save();
      console.log(locations);
    })
    .catch(err => {
      console.log(err);
    });
});

//characters need to load first
//episodes loads 2nd that gets the data from characters and references them
//locations is logged third

// Locations.deleteMany({}).then(() => {
//   Locations.find({}).then(locationsDB => {
//     // console.log(monarchsDB)

//     //iterate or loop through each monarch in monarchDB
//     locationsDB.forEach(locationsDocument => {
//       //monarchDocument is the single monarch from our database
//       //we will make a new variable to find the original JSON object
//       const locationsJson = locationsJsonData.find(
//         locationsJsonItem => locationsJsonItem.episodes === locationsDocument.episodes
//       );

//       // console.log(monarchDocument);
//       // console.log(monarchJson);

//       Episodes.findOne({ episode: locationsJsonData.episodes }).then(
//         episodesDocument => {
//           // console.log(monarchJson.kingdom);
//           // console.log(kingdomDocument);
//           locationsDocument.episodes = episodesDocument.id;
//           locationsDocument.save();
//         }).catch(err => console.log(err));
//     });
//   });
// }).catch(err => console.log(err));

// Locations.deleteMany({}).then(() => {
//   console.log("deleting all locations")
//   Locations.create(locationsJsonData)
//     .then(locations => {
//       // Episodes.save();
//       console.log(locations);
//     })
//     .catch(err => {
//       console.log(err);
//     });

// })

// Episodes.find({}).then(episodes => {
//   console.log(episodes);
//   episodes.forEach(episode => {
//     let episodesJSON = episodesJsonData.find(
//       episodesJSON => episodesJSON.name === episode.name
//     );
//     Characters.findOne({ title: episodesJSON.charactersCreated }).then(
//       characters => {
//         episode.characters = characters._id;
//         episode.save();
//       }
//     );
//   });
// });

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

// //Episodes Seed Data
// Episodes.deleteMany({}).then(() => {
//   console.log("deleted all episodes");
//   //place create/delete/functions here
//     Episodes.create(episodesJsonData)
//     .then(episodes => {
//       // Episodes.save();
//       console.log(episodes);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });
