const express = require("express");
const router = express.Router();
const DataForID = require("../controller/getDataFromId");
const { getDataInfoForArray } = require("../controller/getData");

router.get("/", async (req, res) => {
  try {
    let { pokeTo, limitPoke } = req.query;
    pokeTo = parseInt(pokeTo);
    limitPoke = parseInt(limitPoke);

    let dataInfo;
    if (limitPoke === 0) {
      dataInfo = await getDataInfoForArray(pokeTo, 0);
    } else {
      dataInfo = await getDataInfoForArray(pokeTo, limitPoke);
    }

    res.status(200).json(dataInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
