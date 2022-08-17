let playerScore = 0;
let computerScore = 0;

function disableButtons() {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
}


function computeScore(playerClick){
    let result ="";
    let choices = ['peanut', 'squirrel', 'guy'];
    let computerClick = choices[Math.floor(Math.random() * choices.length)];

    if ((playerClick == 'squirrel' && computerClick == 'peanut') ||
    (playerClick == 'guy' && computerClick == 'squirrel') ||
    (playerClick == 'peanut' && computerClick == 'guy')) {
    
        playerScore++;
        result = ('You win! ' + playerClick + ' beats ' + computerClick + ".");

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again.';
            disableButtons();
        }
    }
    else if(computerClick == playerClick){
        result = "Tie! You both chose " + playerClick + ".";
    }
    else{
        computerScore++;
        result = ('You lose! ' + computerClick + ' beats ' + playerClick + ".");

        if (computerScore == 5) {
            result += ' You lost the game! Reload the page to play again.';
            disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result;
    document.getElementById('player').innerHTML = "Player Score: " + playerScore;
    document.getElementById('computer').innerHTML = "Computer Score: " + computerScore;
}

function alerted(){
    alert("clicked");
}
