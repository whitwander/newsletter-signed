const campoEmail = document.querySelector('.email')
const card = document.getElementById('card')
const card2 = document.getElementById('card-2')
const dismiss = document.getElementById('dismiss')
const input = document.getElementById('email')

campoEmail.addEventListener('submit', (event) => {
    event.preventDefault()
    card.classList.add('hide')
    card2.classList.remove('hide')
    const validacao = email.value
    const textoEmail = document.querySelector('.texto-email')
    textoEmail.innerHTML = `
    <p class="conteudo-texto texto-2">A confirmation email has been sent to <span>${validacao}</span>. Please open it and click the button inside to confirm your subscription.</p>
    `
})

dismiss.addEventListener('click', (event) => {
    event.preventDefault()
    card.classList.remove('hide')
    card2.classList.add('hide')
})


