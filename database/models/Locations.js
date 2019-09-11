const mongoose = require("../connection")

const Schema = mongoose.Schema;

const locationsSchema = new Schema ({
    id:Number,
    name:String,
    type:{
        ref: "Characters",
        type: mongoose.Schema.Types.ObjectId
    }, //want to reference the characters here so depending on the planet they will pop up
    demension:String,
    url: String,
});

const Locations = mongoose.model("Locations", locationsSchema);

module.exports = Locations;