var playerName = prompt('What is your name?');
document.querySelector("#playername").textContent = playerName + '\'s lives:';

var userChoice;
var computerChoice;

function computerSelection(){
    var n = Math.floor(Math.random() * 3);
    if (n === 0){
        computerChoice = 'rock';
    } else if (n === 1){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
}

var rock = document.querySelector(".rockdiv");
var paper = document.querySelector(".paperdiv");
var scissor = document.querySelector(".scissordiv");

rock.addEventListener("click", function(){
    userChoice = 'rock';
    game();
});

paper.addEventListener("click", function(){
    userChoice = 'paper';
    game();
});
scissors.addEventListener("click", function(){
    userChoice = 'scissors';
    game();
});



function game(){
    computerSelection();
 switch(userChoice + computerChoice){
     case 'rockscissors':
        document.querySelector(".textdiv").textContent = 'Rock beats Scissors, ' + playerName + ' wins!';
        break;
     case 'paperrock':
        document.querySelector(".textdiv").textContent = 'Paper beats Rock, ' + playerName + ' wins!';
        break;
     case 'scissorspaper':
        document.querySelector(".textdiv").textContent = 'Scissors beats Paper, ' + playerName + ' wins!';
        break;
    case 'scissorsrock':
        document.querySelector(".textdiv").textContent = 'Scissors beaten by Rock, Computer wins!';
        break;
    case 'rockpaper':
        document.querySelector(".textdiv").textContent = 'Rock beaten by Paper, Computer wins!';
        break;
    case 'paperscissors':
        document.querySelector(".textdiv").textContent = 'Paper beaten by Scissors, Computer wins!'; 
        break;
    case 'rockrock':
        document.querySelector(".textdiv").textContent = 'Rock and Rock, Draw!'; 
        break;
    case 'paperpaper':
        document.querySelector(".textdiv").textContent = 'Paper and Paper, Draw!'; 
        break;
    case 'scissorsscissors':
        document.querySelector(".textdiv").textContent = 'Scissors and Scissors, Draw!';
        break;
    }
}