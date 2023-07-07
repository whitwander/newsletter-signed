const campoEmail = document.querySelector('.email')
const card = document.getElementById('card')
const card2 = document.getElementById('card-2')
const dismiss = document.getElementById('dismiss')
const input = document.getElementById('email')
const error = document.getElementById('valid-error')


campoEmail.addEventListener('submit', (event) => {
    event.preventDefault()
    const validacao = input.value
    const textoEmail = document.querySelector('.texto-email')
    
    if(validacaoEmail(input.value) !== true){
        error.classList.remove('hide')
        input.classList.add('error')
    } else {
    card.classList.add('hide')
    card2.classList.remove('hide')   
    textoEmail.innerHTML = `
    <p class="conteudo-texto texto-2">A confirmation email has been sent to <span>${validacao}</span>. Please open it and click the button inside to confirm your subscription.</p>
    `}
})

dismiss.addEventListener('click', (event) => {
    event.preventDefault()
    card.classList.remove('hide')
    card2.classList.add('hide')
})

function validacaoEmail(input) {
    let emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/;
    return emailRegex.test(input)
}

