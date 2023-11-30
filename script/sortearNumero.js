const elementoMenorValor = document.querySelector('#menorNumero')
const elementoMaiorValor = document.querySelector('#maiorNumero')
let menorValor = 0
let maiorValor = 0

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

function definirRange() {
    const dificuldade = document.querySelector('.active').dataset.dificuldade
    switch (dificuldade) {
        case 'facil':
            menorValor = 0
            maiorValor = 100
            break;
        case 'medio':
            menorValor = 0
            maiorValor = 500
            break;
        case 'dificil':
            menorValor = 0
            maiorValor = 1000
            break;

        default:
            break;
    }
}

// vai inserir os dados do menor e maior valor
function inserirDadosNaTela() {
    elementoMenorValor.innerHTML = `${menorValor}`
    elementoMaiorValor.innerHTML = `${maiorValor}`
}