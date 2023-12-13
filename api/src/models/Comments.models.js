const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
  namePokemon: {
    type: String,
    required: true,
  },
  idPokemon: {
    type: String,
    required: true
  },
  pokemonComments:{
    type:String,
    required:true
  }
});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;