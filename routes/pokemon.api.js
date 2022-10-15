var express = require('express');
const { createPoke } = require('../api/controllers/pokemon/createPoke');
const { getPokeByTN } = require('../api/controllers/pokemon/getPokeByTN');
const { updatePoke } = require('../api/controllers/pokemon/updatePoke');
var router = express.Router();




router.get('/', getPokeByTN)

router.post("/", createPoke);

router.put("/:pokeId", updatePoke);

module.exports = router;