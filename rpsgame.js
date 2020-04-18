var playerName = prompt('What is your name?');
document.querySelector("#playername").textContent = playerName + '\'s lives:';

var userChoice;
var computerChoice;
var playerLife = [life, life, life];
var computerLife = [life, life, life];
var life = document.querySelector(".soul");

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
        playerWonRound();
        break;
     case 'paperrock':
        playerWonRound();
        break;
     case 'scissorspaper':
        playerWonRound();
        break;
    case 'scissorsrock':
        computerWonRound();
        break;
    case 'rockpaper':
        computerWonRound();
        break;
    case 'paperscissors':
        computerWonRound();
        break;
    case 'rockrock':
        draw();
        break;
    case 'paperpaper':
        draw(); 
        break;
    case 'scissorsscissors':
        draw();
        break;
    }

win();
}

function win(){
    if (playerLife.length === 0){
        hideAllPictures();
        document.querySelector(".picturecontainer").textContent = 'Computer Wins!';
    } else if (computerLife.length === 0){
        hideAllPictures();
        document.querySelector(".picturecontainer").textContent = playerName + ' Wins!';
    }
}  

function stopGameIfZeroLife(){
    if (playerLife.length !==0 && computerLife.length !==0){
        game();
    }
}

function hideAllPictures(){
    document.querySelector(".rockdiv").style.display = "none";
    document.querySelector(".paperdiv").style.display = "none";
    document.querySelector(".scissorsdiv").style.display = "none";
}

function showAllPictures(){
    document.querySelector(".rockdiv").style.display = "inline-block";
    document.querySelector(".paperdiv").style.display = "inline-block";
    document.querySelector(".scissorsdiv").style.display = "inline-block";
}

function hideTextDiv(){
    document.querySelector(".textdiv").style.display = "none";
}

function showTextDiv(){
    document.querySelector(".textdiv").style.display = "block";
}

function playerWonRound() {
    function removelife(){
        computerLife.pop();
        for (var i = computerLife.length; i >= 0; i--){ 
        console.log(i);
        document.getElementById("computersoul" + i).style.display = "none";
        break;
        }
    }
    removelife();
    hideAllPictures();
    hideTextDiv();
    document.querySelector(".picturetextdiv").textContent = playerName + ' has won the round!'
    setTimeout(function(){document.querySelector(".picturetextdiv").textContent = ''}, 1000);
    setTimeout(function(){showAllPictures()}, 1000);
    setTimeout(function(){showTextDiv()}, 1000);
}

function computerWonRound() {
    function removelife(){
        playerLife.pop();
        for (var i = playerLife.length; i >= 0; i--){ 
        console.log(i);
        document.getElementById("playersoul" + i).style.display = "none";
        break;
        }
    }
    removelife();
    hideAllPictures();
    hideTextDiv();
    document.querySelector(".picturetextdiv").textContent = 'Computer has won the round!'
    setTimeout(function(){document.querySelector(".picturetextdiv").textContent = ''}, 1000);
    setTimeout(function(){showAllPictures()}, 1000);
    setTimeout(function(){showTextDiv()}, 1000);
}

function draw(){
    document.querySelector(".picturetextdiv").textContent = 'Round Draw!';
    hideAllPictures();
    hideTextDiv();
    setTimeout(function(){document.querySelector(".picturetextdiv").textContent = ''}, 1000);
    setTimeout(function(){showAllPictures()}, 1000);
    setTimeout(function(){showTextDiv()}, 1000);
}