//Lacos de Repeticao

//For
for (let contador = 0; contador < 8; contador++) {
    console.log(contador + " = " + contador);
}

let pontosDeVida = 0;

for(let i = 0; i< 11; i++) {
    pontosDeVida += 1;
    console.log("Tomou pocao magica " + i)
}
console.log(pontosDeVida + " Totais");


//While
let i = 0;
do {
    console.log("Ola");
    i++
} while (i < 4);