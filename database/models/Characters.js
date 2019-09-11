const mongoose = require("../connection")

const Schema = mongoose.Schema;

const charactersSchema = new Schema ({
    id:Number,
    name:String,
    species:String,
    gender:String,
    location:{
        ref: "Locations",
        type: mongoose.Schema.Types.ObjectId,
    },
    image:String,
});

const Characters = mongoose.model("Characters", charactersSchema);

module.exports = Characters;