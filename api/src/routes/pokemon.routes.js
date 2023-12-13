const express = require("express");
const router = express.Router();
const DataForID = require("../controller/getDataFromId");

router.get("/:id", async (req, res) => {
  try {
    const pokemonId = req.params.id; 
    const pokemonData = await DataForID(pokemonId);

    if (!pokemonData) {
      return res.status(404).json({ error: "Pokémon no encontrado" });
    }

    res.json(pokemonData);
  } catch (error) {
    console.error("Error al obtener el Pokémon", error);
    res.status(500).json({ error: "Error al obtener el Pokémon" });
  }
});

module.exports = router;
