const mongoose = require("../connection")

const locationsModel = require("./Locations");

const Schema = mongoose.Schema;

const episodesSchema = new Schema ({
    id:Number,
    name:String,
    air_date:String,
    episode:String,
    url: String,
    created:String,
});

const Episodes = mongoose.model("Episodes", episodesSchema);

module.exports = Episodes;