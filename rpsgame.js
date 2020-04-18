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
        hideAllPictures();
        document.querySelector(".picturecontainer").textContent = playerName + ' has won the round!'
        setTimeout(function(){document.querySelector(".picturecontainer").textContent = ''}, 1500);
        setTimeout(function(){showAllPictures()}, 1500);
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
        hideAllPictures();
        document.querySelector(".picturecontainer").textContent = 'Computer Wins!';
    } else if (computerLife === 0){
        hideAllPictures();
        document.querySelector(".picturecontainer").textContent = playerName + ' Wins!';
    }
}


function stopGameIfZeroLife(){
    if (playerLife && computerLife !==0){
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


// function hideAllPictures(){
//     document.querySelector(".picturecontainer").style.display = "none";
// }

// function showAllPictures(){
//     document.querySelector(".picturecontainer").style.display = "grid";
// }

// function togglePictures(){
//     var a = document.querySelector(".rockdiv");
//     var b = document.querySelector(".paperdiv");
//     var c = document.querySelector(".scissorsdiv")
//     if (a.style.display === "block" && b.style.display === "block" && c.style.display === "block"){
//         a.style.display === "none" && b.style.display === "none" && c.style.display === "none";
//     } else {
//         a.style.display === "block" && b.style.display === "block" && c.style.display === "block";
//     }
// }