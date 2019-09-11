const charactersJsonData = require('./characters.json')
const locationsJsonData = require('./locations.json')
const episodesJsonData = require('./episodes.json')

const Characters = require("./models/Characters")
const Locations = require("./models/Locations")
const Episodes = require("./models/Episodes")

//Charaters Seed Data 
Characters.deleteMany({}).then(() => {
    console.log('deleted all characters')
    //place create/delete/functions here 

    Characters.create(charactersJsonData)
    .then(characters => {
        //shows.save();
      console.log(characters);
    })
    .catch(error => {
      console.log(error)
    })
  });
  
  //Locations Seed Data
  Locations.deleteMany({}).then(() => {
    console.log('deleted all locations')
    //place create/delete/functions here 
    
    Locations.create(locationsJsonData)
    .then(locations => {
        //persons.save();
      console.log(locations);
    })
    .catch(error => {
      console.log(error)
    })
  });

  //Episodes Seed Data
  Episodes.deleteMany({}).then(() => {
    console.log('deleted all episodes')
    //place create/delete/functions here 
    
    Episodes.create(episodesJsonData)
    .then(episodes => {
        //persons.save();
      console.log(episodes);
    })
    .catch(error => {
      console.log(error)
    })
  });




