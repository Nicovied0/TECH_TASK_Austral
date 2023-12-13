const express = require("express");
const router = express.Router();
const DataForID = require("../controller/getDataFromId");
const DataInfo = require("../controller/getData");

router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const pokeName = await DataForName(name.toLowerCase());
      if (!pokeName)
        return res.status(404).send("El pokemon ingresado no existe");
      res.status(200).send(pokeName);
    } else {
      const dataInfo = await DataInfo();
      res.status(200).send(dataInfo);
    }
  } catch (error) {
    res.send(error);
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
