// const Characters = require("./models/Characters")
// const Locations = require("./models/Locations")
const Episodes = require("./models/Episodes")

// const charactersJsonData = require('./characters.json')
// const locationsJsonData = require('./locations.json')
const episodesJsonData = require('./episodes.json')


// //Charaters Seed Data 
// Characters.deleteMany({}).then(() => {
//     console.log('deleted all characters')
//     //place create/delete/functions here 

//     Characters.create(charactersJsonData)
//     .then(characters => {
//       // Characters.save();
//       console.log(characters);
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   });
  
//   //Locations Seed Data
//   Locations.deleteMany({}).then(() => {
//     console.log('deleted all locations')
//     //place create/delete/functions here 
    
//     Locations.create(locationsJsonData)
//     .then(locations => {
//       // Locations.save();
//       console.log(locations);
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   });

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




