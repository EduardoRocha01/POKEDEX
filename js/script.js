const pokemon_name = document.querySelector('.pokemon_name')
const pokemon_number = document.querySelector('.pokemon_number')
const pokemon_image = document.querySelector('.pokemon_image')
const form = document.querySelector('.form')
const input = document.querySelector('.input_search')



const fetchPokemon = async (pokemon) => { // fazendo buscas no API do pokemon
    
    pokemon_name.innerHTML = 'loading...'
    
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)

    if (APIresponse.status == 200){

    const data = await APIresponse.json()   // guardando os dandos de forma organizada

    return data;
}
}

const renderPokemon = async (pokemon) =>{       //alteração de informaçoes da tela do dispositivo
     const data = await fetchPokemon(pokemon)
     
if (data){

     pokemon_name.innerHTML = data.name
     pokemon_number.innerHTML = data.id
     pokemon_image.src = data['sprites']['versions']['generation-v']['black-white']
     ['animated']['front_default']
     input.value = ''
} else {
    pokemon_name.innerHTML = 'Not found :c'
    pokemon_number.innerHTML = ''
  }   
}

form.addEventListener('submit', (event) => {  //pegando o valor de imput
    event.preventDefault();
     
    renderPokemon(input.value) //utilizando o valor do formulario para buscar na função render
})

renderPokemon('1')
