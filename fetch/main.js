async function getPokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/248');
    if (!res.ok) {
      throw new Error(`Error, status code: ${res.status}`);
    } else {
      const pokemon = await res.json();
      console.log(pokemon);
    }
  } catch (error) {
    console.log(`Error retrieving data, status code `, error.message);
  }
}

getPokemon();
