class heroi {
    constructor(name, age, type, gun) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.gun = gun;
    }

    attack() {
        console.log(`O ${this.type} ${this.name} com ${this.age} anos, atacou usando ${this.gun}`);
    }
}

let mago = new heroi('Stan' , 570 , 'Mago' , 'magia');
let guerreiro = new heroi('Hercules' , 250 , 'Guerreiro' , 'espada');
let monge = new heroi('Xofen' , 100 , 'Monge' , 'artes marciais');
let ninja = new heroi('Shadow' , 36 , 'Ninja' , 'shuriken');

function atacar() {
    let guerreiroSelecionado = 'ninja';
    if (guerreiroSelecionado == 'mago') {
        mago.attack()
    } else if (guerreiroSelecionado == 'guerreiro') {
        guerreiro.attack()
    } else if (guerreiroSelecionado == 'monge') {
        monge.attack()
    } else if (guerreiroSelecionado == 'ninja') {
        ninja.attack()
    } else {
        console.log('Nenhum guerreiro selecionado para batalha. ');
    }
}


atacar();