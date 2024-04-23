//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = [10, 15, 2];
const totalPassos = [6, 3, 3];

//TODO: Calcule a posição final do herói:    USEI MATRIZZZZZZZ
const posicaoFinal = [
    [posicaoInicial[0] + totalPassos[0]],
    [posicaoInicial[1] + totalPassos[1]],
    [posicaoInicial[2] + totalPassos[2]]
] ;

// Imprime a posição final
console.log("Posicao final do heroi: " + posicaoFinal);