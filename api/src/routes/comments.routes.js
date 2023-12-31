const express = require("express");
const router = express.Router();
const Comments = require("../models/Comments.models");

router.get("/:id", async (req, res) => {
  try {
    const comments = await Comments.find({ idPokemon: req.params.id });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { idPokemon, pokemonComments } = req.body;

  try {
    const newComment = new Comments({
      idPokemon,
      pokemonComments,
    });

    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
