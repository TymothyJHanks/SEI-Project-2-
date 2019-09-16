const express = require('express');
const app = express();
const parser = require("body-parser");
const cors = require("cors")

app.use(cors());
app.use(parser.urlencoded({extended: true})); //interperts keyy value pairs in URLS
app.use(parser.json()); //converts a json string to the obect and attaches it to req.body

const charactersRoutes = require("./routes/charactersRoutes");
const locationsRoutes = require("./routes/locationsRoutes");
const episodesRoutes = require("./routes/episodesRoutes");

app.use("/characters", charactersRoutes);
app.use("/locations", locationsRoutes);
app.use("/episodes", episodesRoutes);

app.get("/", (req, res) => res.send(`Tymothy's Rick and Morty API`));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });