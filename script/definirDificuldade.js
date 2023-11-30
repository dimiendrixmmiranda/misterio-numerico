const listaDeDificuldade = document.querySelectorAll('#lista-de-dificuldade label')

listaDeDificuldade.forEach(btnDificuldade => {
    btnDificuldade.addEventListener('click', () => {
        listaDeDificuldade.forEach(btn => btn.classList.remove('active'))
        btnDificuldade.classList.add('active')
    })
})