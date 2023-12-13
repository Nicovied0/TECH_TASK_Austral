const axios = require("axios");

const DataForName = async (name) => { 


    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((a) => {
      return a.data;
    });
    
    const pokeName = [{
      id: resp.id,
      name: resp.name,
      types: resp.types.map((t) => t.type.name), 
      image: resp.sprites.other["official-artwork"].front_default
    }];
    
    return pokeName;
};
    
module.exports = DataForName;