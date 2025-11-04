// cor de fundo

let fundo = document.getElementById('fundo')
let body = document.querySelector('body')
let card = document.getElementById('card')

fundo.addEventListener('click' , ()=>{
    fundo.classList.toggle('dark')
    body.classList.toggle('dark')
    card.classList.toggle('dark')
})

// // verificar informações

let entrar = document.getElementById('Entrar')
let email = document.getElementById('email')
let senha = document.getElementById('senha')

entrar.onclick = function(){
    if(!email.value, !senha.value){
        alert("Insira suas informações")
    }
}