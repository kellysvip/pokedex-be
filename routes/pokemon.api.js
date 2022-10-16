var express = require('express');
const { createPoke } = require('../api/controllers/pokemon/createPoke');
const { deletePoke } = require('../api/controllers/pokemon/deletePoke');
const { getPokeByTN } = require('../api/controllers/pokemon/getPokeByTN');
const { getPokeLocation } = require('../api/controllers/pokemon/getPokeLocation');
const { updatePoke } = require('../api/controllers/pokemon/updatePoke');
var router = express.Router();




// router.get('/', getPokeByTN)

router.post("/", createPoke);

router.put("/:pokeId", updatePoke);

router.delete("/:pokeId", deletePoke);

router.get('/', getPokeLocation)


module.exports = router;