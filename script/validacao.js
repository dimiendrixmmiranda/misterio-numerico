let contador = 1
const divAcertou = document.querySelector('#acertou')
const elementoNumeroSecreto = document.querySelector('#numeroSecreto')

function vereficaSeOChuteEValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (isDentroDoRange(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número ente ${menorValor} e ${maiorValor}</div>`
        return
    }

    // refatorar: 
    if (numero === numeroSecreto) {
        divAcertou.style.display = 'flex'
        divJogo.style.display = 'none'
        elementoNumeroSecreto.innerHTML = `${numeroSecreto}`

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O numero secreto é menor</div>`
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O numero secreto é maior</div>`
    }

    if (contador >= 3) {
        if (isPrime(numero)) {
            elementoChute.innerHTML += `<div>O numero secreto é um número primo</div>`
        } else {
            elementoChute.innerHTML += `<div>O numero secreto não é um número primo</div>`
        }
    }
    if (contador >= 6) {
        if (numeroSecreto % 2 === 0) {
            elementoChute.innerHTML += `<div>O numero secreto é PAR</div>`
        } else {
            elementoChute.innerHTML += `<div>O numero secreto é IMPAR</div>`
        }
    }
    if (contador >= 9) {
        const metade = numeroSecreto / 2
        if (numeroSecreto % 2 === 0) {
            elementoChute.innerHTML += `<div>O numero secreto é duas vezes ${metade}</div>`
        } else {
            const resto = numeroSecreto % 2
            elementoChute.innerHTML += `<div>O numero secreto é duas vezes ${Math.floor(metade)} + ${resto}</div>`

        }
    }
    contador++
    console.log(contador)
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

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogarNovamente') {
        window.location.reload()
    }
})