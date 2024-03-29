let tentativas = 1
const divAcertou = document.querySelector('#acertou')
const elementoNumeroSecreto = document.querySelector('#numeroSecreto')
const elementoTentativas = document.querySelector('#tentativas')

function vereficaSeOChuteEValido(chute) {
    if(chute == 'número um' || chute == 'número 1'){
        chute = '1'
    }
    if(chute == 'número dois' || chute == 'número 2'){
        chute = '2'
    }
    if(chute == 'número três' || chute == 'número 3'){
        chute = '3'
    }
    if(chute == 'número quatro' || chute == 'número 4'){
        chute = '4'
    }
    if(chute == 'número cinco' || chute == 'número 5'){
        chute = '5'
    }
    if(chute == 'número seis' || chute == 'número 6'){
        chute = '6'
    }
    if(chute == 'número sete' || chute == 'número 7'){
        chute = '7'
    }
    if(chute == 'número oito' || chute == 'número 8'){
        chute = '8'
    }
    if(chute == 'número nove' || chute == 'número 9'){
        chute = '9'
    }
    
    const numero = +chute
    console.log(numero)
    
    if(chute == 'game over'){
        const musicaPerdedor = new Audio('./musicaPerdedor.m4a')
        musicaPerdedor.play()
        document.body.innerHTML = `
        <div class="container-perdedor">
            <h3>Você Perdeu!</h3>
            <h4>O número secreto era ${numeroSecreto}
            <button id="jogarNovamente">Jogar Novamente</button>
        </div>
        `
    }
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (isDentroDoRange(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número ente ${menorValor} e ${maiorValor}</div>`
        return
    }
    mostrarTentativas(tentativas)

    if (numero === numeroSecreto) {
        divAcertou.style.display = 'flex'
        divJogo.style.display = 'none'
        elementoNumeroSecreto.innerHTML = `${numeroSecreto}`
        const musicaGanhador = new Audio('assets/audios/musicaGanhador.m4a')
        musicaGanhador.play()

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div class="dicas">O numero secreto é menor</div>`
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div class="dicas">O numero secreto é maior</div>`
    }

    if (tentativas >= 3) {
        if (isPrime(numero)) {
            elementoChute.innerHTML += `<div class="dicas">O numero secreto é um número primo</div>`
        } else {
            elementoChute.innerHTML += `<div class="dicas">O numero secreto não é um número primo</div>`
        }
    }
    if (tentativas >= 6) {
        if (numeroSecreto % 2 === 0) {
            elementoChute.innerHTML += `<div class="dicas">O numero secreto é PAR</div>`
        } else {
            elementoChute.innerHTML += `<div class="dicas">O numero secreto é IMPAR</div>`
        }
    }
    if (tentativas >= 9) {
        const metade = numeroSecreto / 2
        if (numeroSecreto % 2 === 0) {
            elementoChute.innerHTML += `<div class="dicas">O numero secreto é duas vezes ${metade}</div>`
        } else {
            const resto = numeroSecreto % 2
            elementoChute.innerHTML += `<div class="dicas">O numero secreto é duas vezes ${Math.floor(metade)} + ${resto}</div>`

        }
    }
    if (tentativas > 10) {
        const musicaPerdedor = new Audio('assets/audios/musicaPerdedor.m4a')
        musicaPerdedor.play()
        document.body.innerHTML = `
        <div class="container-perdedor">
            <h3>Você Perdeu!</h3>
            <button id="jogarNovamente">Jogar Novamente</button>
        </div>
        `
    }
    tentativas++
}

// se o chute for um nan
function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function isDentroDoRange(numero) {
    return numero > maiorValor || numero < menorValor
}

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return false
        };
    return num > 1;
}

function mostrarTentativas(tentativas) {
    elementoTentativas.style.display = 'block'
    elementoTentativas.innerHTML = tentativas
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
})