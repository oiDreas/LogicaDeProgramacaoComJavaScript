// const objeto = {
//     nome: 'Anthony',
//     idade: 20,
//     estado: 'SP'
//   };

//   // Iterar pelas propriedades do objeto
//   for (let chave in objeto) {
//     // Verificar se a propriedade pertence ao objeto, não aos protótipos
//     if (objeto.hasOwnProperty(chave)) {
//       // Imprimir chave e valor no console
//       console.log(`${chave} : ${objeto[chave]}`);
//     }
//   }



// const Array = [1, 2, 3, 4, 5];

// // elementos do array e imprimir seus valores
// for (const valor of Array) {
//     console.log(valor);
// }


// Utilizando jQuery para inserir um parágrafo dentro de um div
// $(document).ready(function() {
//     // Criando parágrafo
//     let paragrafo = $("<p></p>").text("Este é um parágrafo com a classe 'classe1'");
    
//     // Adicionando classe "classe1" ao parágrafo
//     paragrafo.addClass("classe1");
    
//     // Inserindo parágrafo dentro da div com id "div1"
//     $("#div1").append(paragrafo);
// });


$(document).ready(function() {
    // Usando jQuery com encadeamento para encontrar os elementos <p> dentro do elemento de id "container",,
    // aplicar uma cor de fonte e associar uma função ao evento hover
    $("#container")
      .find("p") // Encontra todos os elementos <p> dentro do elemento de id "container"
      .css("color", "red") // Aplica uma cor de fonte red aos elementos <p>
      .hover(function() { // Associa uma função ao evento hoverr
        // Exibe uma mensagem quando o mouse passa sobre o elemento
        alert("Você passou o mouse sobre o elemento!");
    });
});