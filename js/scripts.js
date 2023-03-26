/* let pokemonList = [];

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
}; */

let pokemonRepository = (function() {
    let pokemonList =[{
        name:'Bulbasaur',
        height:7,
        types:['grass', 'poison']
    },
    {
        name:'Charmander',
        height:10,
        types:['grass', 'poison']
    },
    {
        name:'Venusaur',
        height:20,
        types:['grass', 'poison']
    }];

    function add(pokemon) {
        pokemonList.push(pokemon);
      }
    
    function getAll() {
        return pokemonList;
      }
    
    return {
        add: add,
        getAll: getAll
      };
})(); 

/* for (let i = 0; i < pokemonList.length; i++) {
         if (pokemonList[i].height > 10) {
                 document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow! That's big!`+ '<br>'+ '<br>');
         } else {
            document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})`+ '<br>'+ '<br>');
         } 
  }
 */

function myLoopFunction(alist){
    if (alist.height > 10) {
        document.write(`${alist.name} (height: ${alist.height}) - Wow! That's big!`+ '<br>'+ '<br>');
} else {
   document.write(`${alist.name} (height: ${alist.height})`+ '<br>'+ '<br>');
} 
}

pokemonRepository.getAll().forEach(myLoopFunction);

