const mongoose = require("../connection")
const Schema = mongoose.Schema;

const episodesSchema = new Schema ({
    id:Number,
    name:String,
    air_date:String,
    episode:String,
    url: String,
    charactersCreated: [{
        type: Schema.Types.ObjectId, 
        ref: "Characters"
    }],
});

const Episodes = mongoose.model("Episodes", episodesSchema);

module.exports = Episodes;

