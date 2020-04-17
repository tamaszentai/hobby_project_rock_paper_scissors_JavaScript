var playerName = prompt('What is your name?');
document.querySelector("#playername").textContent = playerName + '\'s lives:';

var userChoice;
var computerChoice;
var playerLife = 3;
var computerLife = 3;

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
    stopGameIfZeroLife();
});

paper.addEventListener("click", function(){
    userChoice = 'paper';
    stopGameIfZeroLife();
});
scissors.addEventListener("click", function(){
    userChoice = 'scissors';
    stopGameIfZeroLife();
});



function game(){
    computerSelection();
    
 switch(userChoice + computerChoice){
     case 'rockscissors':
        document.querySelector(".textdiv").textContent = 'Rock vs. Scissors, ' + playerName + ' wins!';
        document.querySelector(".computerlivescontainer").textContent = computerLife -= 1;
        break;
     case 'paperrock':
        document.querySelector(".textdiv").textContent = 'Paper vs. Rock, ' + playerName + ' wins!';
        document.querySelector(".computerlivescontainer").textContent = computerLife -= 1;
        break;
     case 'scissorspaper':
        document.querySelector(".textdiv").textContent = 'Scissors vs. Paper, ' + playerName + ' wins!';
        document.querySelector(".computerlivescontainer").textContent = computerLife -= 1;
        break;
    case 'scissorsrock':
        document.querySelector(".textdiv").textContent = 'Scissors vs. Rock, Computer wins!';
        document.querySelector(".playerlivescontainer").textContent = playerLife -= 1;
        break;
    case 'rockpaper':
        document.querySelector(".textdiv").textContent = 'Rock vs. Paper, Computer wins!';
        document.querySelector(".playerlivescontainer").textContent = playerLife -= 1;
        break;
    case 'paperscissors':
        document.querySelector(".textdiv").textContent = 'Paper vs. Scissors, Computer wins!';
        document.querySelector(".playerlivescontainer").textContent = playerLife -= 1;
        break;
    case 'rockrock':
        document.querySelector(".textdiv").textContent = 'Rock vs. Rock, Draw!'; 
        break;
    case 'paperpaper':
        document.querySelector(".textdiv").textContent = 'Paper vs. Paper, Draw!'; 
        break;
    case 'scissorsscissors':
        document.querySelector(".textdiv").textContent = 'Scissors vs. Scissors, Draw!';
        break;
    }
    if (playerLife === 0){
        setTimeout(function(){ document.querySelector(".textdiv").textContent = 'Computer Wins!'; }, 1500); 
    } else if (computerLife === 0){
        setTimeout(function(){ document.querySelector(".textdiv").textContent = playerName + ' Wins!';}, 1500);
    }
}


function stopGameIfZeroLife(){
    if (playerLife && computerLife !==0){
        game();
    }
}