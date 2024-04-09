// input element #search-input
// button element #search-button
const pokeURL = "https://pokeapi.co/api/v2/pokemon/pikachu";
const form = document.querySelector("#search-form");
const output = document.querySelector("#search-output");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const name = formData.get("name");

// }

// async data fetch
const fetchData = async () => {
  try {
    const respsonse = await fetch(pokeURL);
    const data = await respsonse.json();
    // console.log(data);
    showPokemon(data);
  } catch (err) {
    console.error(err);
  }
};
fetchData();

const showPokemon = (data) => {
  // console.log(data)

  const height = data.height;
  const weight = data.weight;
  const id = data.id;
  const name = data.name;
  // console.log({name}, {id}, {height}, {weight});
  const { stats, types, sprites } = data;

  // Initialize variables for each stat
  let hp, attack, defense, special_attack, special_defense, speed;

  // Loop through each object in the stats array
  stats.forEach((stat) => {
    // Extract stat name and value
    const statName = stat.stat.name;
    const statValue = stat.base_stat;

    // Assign the value to the corresponding variable
    switch (statName) {
      case "hp":
        hp = statValue;
        break;
      case "attack":
        attack = statValue;
        break;
      case "defense":
        defense = statValue;
        break;
      case "special-defense":
        special_defense = statValue;
        break;
      case "special-attack":
        special_attack = statValue;
        break;
      case "speed":
        speed = statValue;
        break;
      default:
        // Handle unknown stat names
        break;
    }
  });
  console.log(
    { hp },
    { attack },
    { defense },
    { special_attack },
    { special_defense },
    { speed }
  );
  const { type } = types;
  const { front_default } = sprites;

  // console.log({stats})
  console.log(types);
  // console.log({stats[0].hp}, {attack}, {defense}, {special_attack}, {special_defense}, {speed});
  // console.log({type});
  console.log(front_default);
};
showPokemon();

/**

 * types[{}]
 * stats[{hp, attack, defense, special-attack, special-defense, speed }]
 * sprite/front-default
 */
