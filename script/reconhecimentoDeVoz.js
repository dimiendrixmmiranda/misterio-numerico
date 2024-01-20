const elementoChute = document.querySelector('#chute')

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function reconhecimentoDeFala(){
    recognition.lang = 'pt-Br'
    recognition.start()
    
    recognition.addEventListener('result', onSpeak)  
}

function onSpeak(e){
    let chute = e.results[0][0].transcript
    exibirChuteNaTela(chute)
    vereficaSeOChuteEValido(chute)
}

function exibirChuteNaTela(chute){
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
    elementoChute.innerHTML = `
        <p>Você disse:</p>
        <div class="valor-falado">${chute}</div>
    `
}

recognition.addEventListener('end', () => {
    recognition.start()
})