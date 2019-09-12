const express = require('express');
const app = express();
const parser = require("body-parser");
const charactersRoutes = require("./routes/charactersRoutes");
const locationsRoutes = require("./routes/locationsRoutes");
const episodesRoutes = require("./routes/episodesRoutes");

app.use(parser.urlencoded({extended: true})); //interperts keyy value pairs in URLS
app.use(parser.json()); //converts a json string to the obect and attaches it to req.body

app.use("/api/characters/", charactersRoutes);
app.use("/api/locations/", locationsRoutes);
app.use("/api/episodes/", episodesRoutes);

app.listen(8080, () => console.log("Everything is working on port 8080"))



