
function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar imagem
    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        // se tiver light mode , adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png' )

    } else{
        // se estiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
    }

}

