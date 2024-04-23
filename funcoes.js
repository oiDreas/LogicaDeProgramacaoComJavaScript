//***Funcoes devem ter o nome de uma acao (Verbo);***


function torrar() {
  console.log("Torrando pao");
  injetarPao();
}

function injetarPao() {
  console.log("Preparando para injetar o pao");
  console.log("Finalizado");
}

torrar();
mainSaveData();

//Funcao que pega todos os dados
function getData() {
  //Logica implementada aqui
  console.log("Pegando dados do Usuario");
}

function checkValues() {
  console.log("Validando dados");
}

function sendToDataBase() {
  console.log("Enviando dados");
}

//Chamar tudo de uma vez
function mainSaveData() {
  getData();
  checkValues();
  sendToDataBase();
}





            //FUNCOES COM PARAMETROS
            torrar("Frances", 9.99, true)
            
            function torrar(pao, valor, status, nome = "cliente") {
                let name = 'Anthony'
                console.log("Torrada feita com " + pao) 
                console.log("Para o  " + nome)
                console.log("No valor de " + valor)
                console.log("Status: " + status)
            }





//Evite gambiarras
gambiarra("pao na chapa", undefined, "felipe");  //Usando undefined ele busca outro valor pra entrar no lugar
                                                // Porem e uma gambiarra
function gambiarra(pao, preco = 9.99, nome) {
  console.log("Tipo de pao: " + pao)
  console.log("Valor: " + preco)
  console.log("Nome: " + nome)
}

