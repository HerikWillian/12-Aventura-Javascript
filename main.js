
let heroi = {
    nome: prompt("Digite o nome do(a) herói(na): "),
    vida: 100,
    forca: 10,
    recursos: 50
};

function mostrarStatus() {
    console.log(`Status de ${heroi.nome}:`);
    console.log(`Vida: ${heroi.vida}`);
    console.log(`Força: ${heroi.forca}`);
    console.log(`Recursos: ${heroi.recursos}`);
    console.log('-------------------------');
}

function enfrentarDesafio() {
    let desafios = [
        { descricao: "enfrenta um monstro", dano: 20, recompensa: 30 },
        { descricao: "cai em uma armadilha", dano: 10, recompensa: 10 },
        { descricao: "encontra um baú de tesouro", dano: 0, recompensa: 50 }
    ];

    let desafio = desafios[Math.floor(Math.random() * desafios.length)];
    console.log(`${heroi.nome} ${desafio.descricao}`);
    
    heroi.vida -= desafio.dano;
    heroi.recursos += desafio.recompensa;
    
    if (heroi.vida <= 0) {
        console.log(`${heroi.nome} foi derrotado(a)!`);
        return false;
    }

    mostrarStatus();
    return true;
}

function start() {
    let rodadas = 5;
    console.log(`Bem-vindo(a), ${heroi.nome}! Sua aventura começa agora.`);

    for (let i = 1; i <= rodadas; i++) {
        console.log(`Rodada ${i}`);
        if (!enfrentarDesafio()) {
            console.log(`Game Over!`);
            break;
        }
    }

    if (heroi.vida > 0) {
        console.log(`${heroi.nome} completou a aventura! Parabéns!`);
    }
}
