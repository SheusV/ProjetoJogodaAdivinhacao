//variaveis
const screen1= document.querySelector(".screen1")
const screen2= document.querySelector(".screen2")
const buttonTry = document.querySelector("#buttonTry")
const buttonReset = document.querySelector("#buttonReset")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//eventos
buttonTry.addEventListener('click', handleTryClick)
buttonReset.addEventListener('click',handleResetClick )


//funcao callback
function handleTryClick(event){
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")
    console.log(inputNumber.value)
    
    if(Number(inputNumber.value)==randomNumber){
        toggleScreen()
        
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} vezes `
       
    }

    inputNumber.value=""
    xAttempts++

    
}

function handleResetClick(){
    toggleScreen()
    xAttempts=1
}
 function toggleScreen(){
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
 }


