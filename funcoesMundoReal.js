
createStringConnection("db_products" , "andreasAnthony" , 1234)
function createStringConnection(databaseName, user, pass) {
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}

let userName = getFirstName("Andreas Anthony Dias Santos");
console.log(`Welcome ${userName}!`)

function getFirstName(name) {
    let firstName = name.split(" ")[0];
    return firstName;
}


// USando split Char

let nomeUsuario = colocarPrimeiroNome("Andreas-Anthony-Dias" , "-")
console.log(`Welcome 2.0 ${nomeUsuario}!`)

function colocarPrimeiroNome(nome, splitChar) {
    let primeiroNome = nome.split(splitChar)[1];
    return primeiroNome;
}