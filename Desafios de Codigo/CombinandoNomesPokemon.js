let nomeEntrada = ["Bulba" , "Ivy" , "Venu"];

function combinandoNomesPokemons(palavra) {
    let palavraPokemon = `${palavra[0]}saur, ${palavra[1]}saur, ${palavra[2]}saur.`;
    return palavraPokemon;
}

let palavraGerada = combinandoNomesPokemons(nomeEntrada);

console.log(palavraGerada);