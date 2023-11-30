const btnStart = document.querySelector('#start')
const divMenu = document.querySelector('#menu')
const divJogo = document.querySelector('#jogo')
let numeroSecreto = 0

btnStart.addEventListener('click', () => {  
    comecarJogo()
    definirRange()
    numeroSecreto = gerarNumeroAleatorio()
    inserirDadosNaTela()
    reconhecimentoDeFala()
    console.log(numeroSecreto)
})

// vai ocultar o menu e deixar visivel o jogo
function comecarJogo(){
    divMenu.style.display = 'none'
    divJogo.style.display = 'flex'
}