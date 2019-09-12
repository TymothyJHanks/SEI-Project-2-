const mongoose = require("../connection")
//add a refence for the location model
const locationsModel = require("./Locations");
const Schema = mongoose.Schema;

const charactersSchema = new Schema ({
    id:Number,
    name:String,
    species:String,
    gender:String,
    location:{ //in this use the same outline code in the locations model to have relate 
        name:String,
        url:String,
    },
    image:String,
});

const Characters = mongoose.model("Characters", charactersSchema);

module.exports = Characters;