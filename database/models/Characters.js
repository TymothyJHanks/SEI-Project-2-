const mongoose = require("../connection")

const Schema = mongoose.Schema;

const charactersSchema = new Schema ({
    id:Number,
    name:String,
    species:String,
    gender:String,
    image:String,
    url: String
});

const Characters = mongoose.model("Characters", charactersSchema);

module.exports = Characters;