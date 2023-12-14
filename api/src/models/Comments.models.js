const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
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