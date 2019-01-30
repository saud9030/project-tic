// need to have the three indecies to win a game.
var winningCases = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];
// to turn the .col class into an array to use the indecies for the input from both the user and the computer
var computerBox = $(".col").toArray();
// to count the rounds for the computer to test them with the winning combinations
var round = 0;
var gameOver = 0;
// to record if there was any tie in the game.
var tie = 0;
// funtion to check who won the game in the possible combinations
function checkWinner(win){
    //to add to the var everytime a move is played 
    tie += 1;
    if (
        (computerBox[0].textContent === win && computerBox[1].textContent === win && computerBox[2].textContent === win) 
        ||
        (computerBox[3].textContent === win && computerBox[4].textContent === win && computerBox[5].textContent === win) 
        ||
        (computerBox[6].textContent === win && computerBox[7].textContent === win && computerBox[8].textContent === win) 
        ||
        (computerBox[0].textContent === win && computerBox[4].textContent === win && computerBox[8].textContent === win) 
        ||
        (computerBox[0].textContent === win && computerBox[3].textContent === win && computerBox[6].textContent === win) 
        ||
        (computerBox[1].textContent === win && computerBox[4].textContent === win && computerBox[7].textContent === win) 
        ||
        (computerBox[2].textContent === win && computerBox[5].textContent === win && computerBox[8].textContent === win) 
        ||
        (computerBox[2].textContent === win && computerBox[4].textContent === win && computerBox[6].textContent === win) 
            ){
                // if there is a winner, tie should goes to 0 to avoid having a bug if we restart the game
                tie = 0;
            console.log(` ${user} just won`)
            // to stop the user from playing after winning we add 1 to gameOver var.
             gameOver++;
            }else if (tie === 9){
                alert(`it's a tie`)
            }
    
}
//for the first round, the computer play in the center if the user didn't otherwise the computer takes the first box (index === 0)
function startRound(){
    {
        if (computerBox[4].textContent === ''){
            return $(computerBox[4]).text("X");
        }
        else{
            for (var r = 0; r <=8; r+=2){
                if(computerBox[r].textContent === ''){
                    return $(computerBox[r]).text("X");
                }
            }
            
        }
    }
}
// this function to win against the user
function toWin(){
    // to loop through all the winning cases to test any possiblities to win.
    for (loop in winningCases){
        // to count how many indecise a user have in a winning case
        var combination = 0;
        // to store the empty index that is last index to win
        var lastToWin = 0;
        // to test the wining case that was selected
        for (var allWining = 0; allWining < 3; allWining++){
            // to see if the user has two indecise for the winning case
            if (computerBox[winningCases[loop][allWining]].textContent === "O"){
                combination++;
            }
            // to know the last index for win
            else if (computerBox[winningCases[loop][allWining]].textContent === ""){
                // to store the number of the last winning index to use it aginst the user
                lostToWin = allWining;
            }
            if (combination === 2){
                console.log(winningCases[loop]);
                console.log(allWining);
                console.log(winningCases[loop][allWining]);
                // using the last winning index against the user
                return $(computerBox[winningCases[loop][lostToWin]]).text("X");
            }
        }
    }
}

function computerTurn(){
    round++;
    if (round ===  1){
        return startRound();
    }
    if ( round === 2){
        toWin();
    }
    if (round === 3){
        toWin();
    }
}
function computerPlay(event){
    //to save col that was clicked.
    var turn = event.target;
    // to check if the box wasn't empty to return a massage to the user that you made a mistake.
    if (turn.textContent === "X" || turn.textContent === "O"){
        alert("wrong Box")
    }
    // if there was winner then 1 will be added to gameOver, then user can't play until user restart the game.
    else if(gameOver === 1){
        console.log("you already have a winner")
    }
    // if there is a possible way to play then it goes here, and put the an O for the user 
   else{
        $(turn).text("O")  
        computerTurn();
        checkWinner("X");
        checkWinner("O");
        
   }

}

$(".col").on("click",computerPlay);
