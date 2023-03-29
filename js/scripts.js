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
    function addListItem(pokemon){
        console.log('addListItem called')
        let pokemonListElement = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.addEventListener('click', function (event){
            showDetails(pokemon)
        }
        )
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonListElement.appendChild(listpokemon);
    }
    function showDetails(pokemon){
        console.log(pokemon);
    }
    
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails:showDetails
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

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
  