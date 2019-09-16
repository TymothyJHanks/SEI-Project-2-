const mongoose = require("../connection")

const Schema = mongoose.Schema;

const locationsSchema = new Schema ({
    id:Number,
    name:String,
    type:String,
    dimension:String,
    url: String,
});

const Locations = mongoose.model("Locations", locationsSchema);

module.exports = Locations