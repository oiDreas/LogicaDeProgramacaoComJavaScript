class formaDoBolo {
    constructor(saborDaMassa, saborDoRecheio) {
        this.saborDaMassa = saborDaMassa;
        this.saborDoRecheio = saborDoRecheio;
    }


    //Funcao dentro da classe nao precisa da palavra "Function";
    write() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}!!!`)
    }

    assar() {
        console.log(`Assando segundo bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}!!`)
    }
}

let boloDaFesta = new formaDoBolo('Cenoura' , 'Chocolate'); //Palavra-chave new instancia um classe
let boloPremium = new formaDoBolo('Morango' , 'Ninho');  //Dentro dos () definimos os parametros do constructor(saborDaMassa , saborDoRecheio);

boloDaFesta.write();  //Chamamos a variavel boloDaFesta junto com a funcao write;
boloPremium.assar();  //Chamamos a variavel boloPremium junto com a funcao assar;

