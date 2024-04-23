let pokemon = [
    ["Poochyena" , "Lv2" , 'M' , 13],
    ["Zigzagoon" , "Lv2" , 'F' , 13],
    ["Dragonite" , "Lv5" , 'F' , 25],
    ["Dragonite" , "Lv5" , 'F' , 24],
    ["Poochyena" , "Lv3" , 'F' , 15],
    ["Wurmple" , "Lv2" , 'M' , 7]
]

const messageCadastroOn = " cadastrado com sucesso";
const messageCadastroOff = " nao cadastrado"


        // Com Else If
if (pokemon[0][3] < 10) {
    console.log(pokemon[0][0] + messageCadastroOff);
} else if (pokemon[1][3] < 10) {
    console.log(pokemon[1][0] + messageCadastroOff);
} else if (pokemon[2][3] < 20) {
    console.log(pokemon[2][0] + messageCadastroOff);
} else if (pokemon[3][3] < 20) {
    console.log(pokemon[3][0] + messageCadastroOff);
} else if (pokemon[4][3] < 10) {
    console.log(pokemon[4][0] + messageCadastroOff);
} else if (pokemon[5][3] < 10) {
    console.log(pokemon[5][0] + messageCadastroOff);
}

if (pokemon[0][3] > 10) {
    console.log(pokemon[0][0] + messageCadastroOn);
} else if (pokemon[1][3] > 10) {
    console.log(pokemon[1][0] + messageCadastroOn);
} else if (pokemon[2][3] >= 20) {
    console.log(pokemon[2][0] + messageCadastroOn);
} else if (pokemon[3][3] >= 20) {
    console.log(pokemon[3][0] + messageCadastroOn);
} else if (pokemon[4][3] > 10) {
    console.log(pokemon[4][0] + messageCadastroOn);
} else if (pokemon[5][3] > 10) {
    console.log(pokemon[5][0] + messageCadastroOn);
}




        // Com Switch Case
switch(pokemon) {
    case (pokemon[0][3] < 10):
        console.log(pokemon[0][0] + messageCadastroOff);
        break
    case (pokemon[1][3] < 10):
        console.log(pokemon[1][0] + messageCadastroOff);
        break
    case (pokemon[2][3] < 20):
        console.log(pokemon[2][0] + messageCadastroOff);
        break
    case (pokemon[3][3] < 20):
        console.log(pokemon[3][0] + messageCadastroOff);
        break
    case (pokemon[4][3] < 10) :
        console.log(pokemon[4][0] + messageCadastroOff);
        break
    case (pokemon[5][3] < 10):
        console.log(pokemon[5][0] + messageCadastroOff);
        break
    
    default:
        console.log(messageCadastroOn);
    }