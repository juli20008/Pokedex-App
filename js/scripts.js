let pokemonList = [];

pokemonList[0]={
    name:'Bulbasaur',
    height:7,
    types:['grass', 'poison']
};
pokemonList[1]={
    name:'Charmander',
    height:10,
    types:['grass', 'poison']
};
pokemonList[2]={
    name:'Venusaur',
    height:20,
    types:['grass', 'poison']
};

for (let i = 0; i < pokemonList.length; i++) {
         if (pokemonList[i].height > 10) {
                 document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow! That's big!`+ '<br>'+ '<br>');
         } else {
            document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})`+ '<br>'+ '<br>');
         } 
  }

