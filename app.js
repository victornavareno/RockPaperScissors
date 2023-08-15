// Retrieving variables from HTML elements
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

// GLobal variables
let userChoice;
let computerChoice;
let result;

// Every time you click a button - this code snippet executes:
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}
))

// Generates a random choice based on the user choice
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 // Or you can juts use 3
    console.log(randomNumber);

    switch(randomNumber){
        case 1:
            computerChoice = 'Rock';
            break;

        case 2:
            computerChoice = 'Paper';
            break;

        case 3:
            computerChoice = 'Scissors';
            break;

        // Im not adding a default tho
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}


// Checks the result of the user's choice vs the computer's choice
function getResult(){

    // ugly aah solution
    if(computerChoice === userChoice){
        result = 'its a draw!';
    }

    else if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'you win!';
    }

    else if(computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'you lose!';
    }

    else if(computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'you win!';
    }

    else if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'you lose!';
    }

    else if(computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'you lose!';
    }

    else if(computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'you win!';
    }

    resultDisplay.innerHTML = result;
}