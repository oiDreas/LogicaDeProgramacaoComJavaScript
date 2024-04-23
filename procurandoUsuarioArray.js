let lista = ["Rodrigo" , "Cleber" , "Rosangela" , "Maria" , "William"];

let usuario = "Maria";

for (let i = 0; i < lista.length; i++) {
    if ( lista[i] == usuario) {
        let usuarioSelecionado = usuario;
        console.log(`Usuario encontrado: ${usuarioSelecionado}`)
    } else {
        console.log(`Usuario nao encontrado.`)
    }
}