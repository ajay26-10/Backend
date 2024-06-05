async function fetchData(url) {
    try{
        const response = await fetch(url);
        const result =  await response.json();
        console.log(result.chain.species.name);
    } catch(error){
        console.log(error);
    }
}

fetchData("https://pokeapi.co/api/v2/evolution-chain/77/");