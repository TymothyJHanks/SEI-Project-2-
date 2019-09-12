const mongoose = require("../connection")
//add a require for the character model to reference 
const charactersModel = require("./Characters");

const Schema = mongoose.Schema;

const locationsSchema = new Schema ({
    id:Number,
    name:String,
    type:String,
    dimension:String,
    url: String,
});


const Locations = mongoose.model("Locations", locationsSchema);

module.exports = Locations;
    // type:{
    //     ref: `${charactersModel}`, //all you need to do is just copy and paste whats going on here in the locations section in the characters model
    //     type: Schema.Types.ObjectId
    // }, //want to reference the characters here so depending on the planet they will pop up