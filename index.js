const showPokemon = (data) => {
  // console.log(data);
 const height = data.height;
 const weight = data.weight;
 const id = data.id;
 const name = data.name;
 // console.log({name}, {id}, {height}, {weight});
 const { stats, types, sprites } = data;

 let hp, attack, defense, special_attack, special_defense, speed;

 stats.forEach((stat) => {
   const statName = stat.stat.name;
   const statValue = stat.base_stat;
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
       
       break;
   }
 });
 // console.log(
 //     { hp },
 //     { attack },
 //     { defense },
 //     { special_attack },
 //     { special_defense },
 //     { speed }
 //   );

 const typesList = types.map(type => type.type.name).join(', ');

 // Update the DOM elements
 document.querySelector("#pokemon-name").textContent = name;
 document.querySelector("#pokemon-id").textContent = `# ${id}`;
 document.querySelector("#weight").textContent = `Weight: ${weight}`;
 document.querySelector("#height").textContent = `Height: ${height}`;
 document.querySelector("#types").textContent = ` ${typesList}`;
 document.querySelector("#hp").textContent = ` ${hp}`;
 document.querySelector("#attack").textContent = ` ${attack}`;
 document.querySelector("#defense").textContent = ` ${defense}`;
 document.querySelector("#special-attack").textContent = ` ${special_attack}`;
 document.querySelector("#special-defense").textContent = ` ${special_defense}`;
 document.querySelector("#speed").textContent = ` ${speed}`;

 // Set the sprite image
 document.querySelector("#sprite").src = sprites.back_default;
};

// Function to fetch Pokemondata based on user input
const fetchPokemonData = async (pokemonName) => {
 const pokeURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
 
 try {
   const response = await fetch(pokeURL);
   const data = await response.json();
   return data;
 } catch (error) {
   console.error('Error fetching Pokémon data:', error);
   throw error;
 }
};

// Function to handle form submission
const handleFormSubmit = async (event) => {
 event.preventDefault(); 
 console.log('Form submitted');
 const form = event.currentTarget; // Get the form element
 const formData = new FormData(form); // Create a FormData object from the form
 
 const pokemonName = formData.get("pokemon").toLowerCase(); // Get the Pokemon and process
 
 try {
   const pokemonData = await fetchPokemonData(pokemonName); // Fetch Pokémon data based on the name
   showPokemon(pokemonData); // Display Poké
 } catch (error) {
  
   console.error('i got no submission:', error);
 }
};

// Event listener to handle form submission
const form = document.querySelector("#search-form");
form.addEventListener("submit", handleFormSubmit);
