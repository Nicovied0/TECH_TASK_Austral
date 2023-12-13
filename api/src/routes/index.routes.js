const express = require("express");
const router = express.Router();

const pokemonRoute = require("./pokemon.routes");
const commentsRoute = require("./comments.routes");

router.use("/pokemon", pokemonRoute);
router.use("/comments", commentsRoute);

module.exports = router;