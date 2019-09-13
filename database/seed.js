const Characters = require("../database/models/Characters")
const Locations = require("../database/models/Locations")
const Episodes = require("../database/models/Episodes")

const charactersJsonData = require('./characters.json')
const locationsJsonData = require('./locations.json')
const episodesJsonData = require('./episodes.json')

const episodesSeedData = episodesJsonData.map(episodesRawItem => {
  const episodesSeedItem = {};

  episodesSeedItem.id = episodesRawItem.id;
  episodesSeedItem.name = episodesRawItem.name;
  episodesSeedItem.air_date = episodesRawItem.air_date;
  episodesSeedItem.episode = episodesRawItem.episode;
  episodesSeedItem.url = episodesRawItem.url;

  return episodesSeedItem;
});

const charactersData = charactersJsonData.map(characters => {
  const newCharacter = {}
  newCharacter.id = characters.id
  newCharacter.name = characters.name
  newCharacter.species = characters.species
  newCharacter.gender = characters.gender
  newCharacter.image = characters.image 
  newCharacter.url = characters.url
  return newCharacter
})

 //Episodes Seed Data
 Episodes.deleteMany({}).then(() => {
  console.log('deleted all episodes')
  //place create/delete/functions here 
  
  Episodes.create(episodesJsonData)
  .then(episodes => {
    // Episodes.save();
    console.log(episodes);
  })
  .catch(err => {
    console.log(err)
  })
});

//Charaters Seed Data 
Characters.deleteMany({}).then(() => {
  console.log('deleted all characters')
  //place create/delete/functions here 

  Characters.create(charactersJsonData)
  .then(characters => {
    // Characters.save();
    console.log(characters);
  })
  .catch(err => {
    console.log(err)
  })
});

  //Locations Seed Data
  Locations.deleteMany({}).then(() => {
    console.log('deleted all locations')
    //place create/delete/functions here 
    
    Locations.create(locationsJsonData)
    .then(locations => {
      // Locations.save();
      console.log(locations);
    })
    .catch(err => {
      console.log(err)
    })
  });

//   Monarch.remove({})
//     .then(() => {
//         Monarch.create(monarchData)
//             .then(monarchs => {
//                 console.log(monarchData)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     })

// Kingdom.remove({})
//     .then(() => {
//         Kingdom.create(kingdomData)
//             .then(kingdoms => {
//                 console.log(kingdomData)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     })