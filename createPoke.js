const fs = require("fs");
const csv = require("csvtojson");

const createPokemon = async () => {
  let newData = await csv().fromFile("pokemon.csv");
  //   let data = JSON.parse(fs.readFileSync("pokemon.json"));
  newData = newData.map((e, i) => {
    if (i < 721)
      if (e.Type2) {
        return {
          id: i + 1,
          name: e.Name,
          types: [e.Type1, e?.Type2],
          url: `http://localhost:5000/images/${i + 1}.png`,
        };
      } else
        return {
          id: i + 1,
          name: e.Name,
          types: [e.Type1],
          url: `http://localhost:5000/images/${i + 1}.png`,
        };
    else return;
  });

  newData.map((newData) => {
    if (newData === null) delete newData;
  });
  fs.writeFileSync("pokemon.json", JSON.stringify(newData));
  // delete newData[0]
  console.log("done", newData);
};

createPokemon();
