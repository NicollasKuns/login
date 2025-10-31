let fundo = document.getElementById('fundo')
let body = document.querySelector('body')
let card = document.getElementById('card')

fundo.addEventListener('click' , ()=>{
    fundo.classList.toggle('dark')
    body.classList.toggle('dark')
    card.classList.toggle('dark')
})