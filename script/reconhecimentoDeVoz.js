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
    elementoChute.innerHTML = `
        <p>Você disse:</p>
        <div class="valor-falado">${chute}</div>
    `
}

recognition.addEventListener('end', () => {
    recognition.start()
})