// Calculo do XP: Para calcular a quantidade de XP ganhos, o programa precisa considerar o nível do monstro e a dificuldade da batalha. A fórmula num1 * num2 * 100 é usada para 
// calcular essa quantidade com base nos valores fornecidos.

            // Explicação:

// num1: Este é o nível do monstro. Quanto maior o nível do monstro, mais XP você ganhará ao derrotá-lo. Portanto, multiplicar o nível do monstro por um valor maior ajudará a 
// refletir o aumento da recompensa de XP para monstros mais poderosos.

// num2: Este é o valor da dificuldade da batalha, variando de 1 a 100. Quanto maior a dificuldade da batalha, mais XP você deve ganhar para enfrentar um desafio maior. Multiplicar 
// pela dificuldade ajuda a ajustar a recompensa de XP com base na intensidade da batalha.

// 100: Este é o multiplicador constante que determina a escala geral de recompensa de XP. Multiplicar pelo nível do monstro e pela dificuldade aumenta a recompensa em 100 vezes o valor 
// do nível e da dificuldade.

            // Entrada
// O nível do monstro (um número inteiro).

// A dificuldade da batalha, representada por um valor de 1 a 100 (um número inteiro).

            // Saída
// Imprima a quantidade de XP ganhos após a batalha.

            // Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

            // Entrada	Saída
// 45 - 40	Voce ganhou 180000 XP!
// 41 - 38	Voce ganhou 155800 XP!
// 15 - 20	Voce ganhou 30000 XP!

let xpGanhos = calcularXpGanhos(15, 20);

function calcularXpGanhos(nivelMonstro, dificuldadeBatalha) {
    let calculo = (nivelMonstro * dificuldadeBatalha) * 100;
    return calculo;
}

function messageOut(xpGanhos, calcularXpGanhos) {
    console.log(`Voce ganhou ${xpGanhos} de XP!`);
}

messageOut(xpGanhos, calcularXpGanhos());