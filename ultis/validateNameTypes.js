const { pokemonTypes } = require("../src/pokemonTypes");


function throwError(text){
    const exception = new Error(text);
    exception.statusCode = 404;
    throw exception;
  }

function validateNameTypes(name, types, data) {
    const checkName = data.findIndex((pokemon) => pokemon.name === name);
    if (checkName > 0) {
      throwError(`Pokemon has exist`)
      
    }

    const checkTypes = types.map((type) => pokemonTypes.includes(type.toLowerCase()));
    checkTypes.map((check) => {
      if (!check) {
      throwError(`Types is not valid`)
      }
    });
}

module.exports = {validateNameTypes}