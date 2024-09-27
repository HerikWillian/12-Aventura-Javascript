// Atributos do(a) herói(na)
let heroi = {
    nome: prompt("Digite o nome do(a) herói(na): "),
    vida: 100,
    forca: 10,
    dinheiro: 50 // O recurso continua sendo dinheiro
};

// Criação e estilização do título
const title = document.createElement('h1');
title.innerText = 'Jogo de Aventura';
title.style.color = '#FFD700';
title.style.fontSize = '3em';
document.body.prepend(title);

// Criação e estilização da descrição
const description = document.createElement('p');
description.innerText = 'Prepare-se para embarcar em uma jornada épica!';
description.style.color = 'white';
description.style.fontSize = '1.2em';
description.style.textAlign = 'center';
description.style.marginTop = '-10px';
document.body.prepend(description);

// Função para mostrar o status do herói
function mostrarStatus() {
    console.log(`Status de ${heroi.nome}:`);
    console.log(`Vida: ${heroi.vida}`);
    console.log(`Força: ${heroi.forca}`);
    console.log(`Recursos: Dinheiro = ${heroi.dinheiro}`);
    console.log('-------------------------');

    const statusDiv = document.createElement('div');
    statusDiv.style.marginTop = '20px';
    statusDiv.style.padding = '10px';
    statusDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    statusDiv.style.color = '#f9f9f9';
    statusDiv.style.borderRadius = '5px';
    statusDiv.innerHTML = `
        <strong>Status de ${heroi.nome}:</strong><br>
        Vida: ${heroi.vida}<br>
        Força: ${heroi.forca}<br>
        Recursos: Dinheiro = ${heroi.dinheiro}
    `;
    document.body.appendChild(statusDiv);
}

// Função para enfrentar desafios
function enfrentarDesafio() {
    let desafios = [
        { descricao: "enfrenta um monstro", dano: 20, recompensa: 30 },
        { descricao: "cai em uma armadilha", dano: 10, recompensa: 10 },
        { descricao: "encontra um baú de tesouro", dano: 0, recompensa: 50 }
    ];

    let desafio = desafios[Math.floor(Math.random() * desafios.length)];
    console.log(`${heroi.nome} ${desafio.descricao}`);
    
    // Reduz a vida de acordo com o dano e aumenta o dinheiro pela recompensa
    heroi.vida -= desafio.dano;
    heroi.dinheiro += desafio.recompensa;
    
    // Verifica se a vida chegou a 0 ou menos
    if (heroi.vida <= 0) {
        console.log(`${heroi.nome} foi derrotado(a)!`);
        return false;
    }

    mostrarStatus();
    return true;
}

// Função para iniciar o jogo
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

// Criação e estilização do botão de iniciar
const startButton = document.createElement('button');
startButton.innerText = 'Iniciar Aventura';
startButton.style.backgroundColor = '#FFD700';
startButton.style.color = 'black';
startButton.style.border = 'none';
startButton.style.borderRadius = '5px';
startButton.style.padding = '10px 20px';
startButton.style.fontSize = '1.2em';
startButton.style.cursor = 'pointer';
startButton.style.transition = 'background-color 0.3s';

startButton.onmouseover = function() {
    startButton.style.backgroundColor = '#ffc107'; // Cor mais clara ao passar o mouse
};

startButton.onmouseout = function() {
    startButton.style.backgroundColor = '#FFD700'; // Volta à cor original
};

// Adiciona evento ao botão para iniciar o jogo
startButton.addEventListener('click', start);

// Adiciona o botão à página
document.body.appendChild(startButton);

// Inicializa o status
mostrarStatus();
