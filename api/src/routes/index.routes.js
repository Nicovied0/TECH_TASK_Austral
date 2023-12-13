const express = require("express");
const router = express.Router();

const pokemonRoute = require("./pokemon.routes");

router.use("/pokemon", pokemonRoute);

module.exports = router;