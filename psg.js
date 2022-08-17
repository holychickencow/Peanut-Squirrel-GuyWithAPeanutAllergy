let playerScore = 0;
let computerScore = 0;
let choices = [peanut, squirrel, guy];

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function computeScore(playerClick){
    let computerClick = choices[Math.floor(Math.random() * choices.length)]
    if(computerClick == playerClick){
    }
    
    document.getElementById('result').innerHTML = result
}



buttons.forEach(button =>{
    button.addEventListener('click', computeScore(button.value))
})