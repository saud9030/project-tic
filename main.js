// empty boxes to start to play with 
// 8 cases of winning/losing , and everthing else will be tie <<< using if condintions/loops
// create two users , making the game rotating between them after the first chooses
// when the game ends a page will pop congrating the user
//if the game ended it will restart itself again 

//use array to collect data


// -----------------------
var user = "user2"
let user1 = 0;
let user2 = 0;
var tie=0;
var gameOver = 0;

function testing(event){
    if (gameOver === 0){
        var turn = event.target;
   
        boxTaken(event);
    
        checkWinner(event);
    }else{
        swal("Game Over", "You need to restart the game", "warning");
    }
    

}
// to change between users at every click and to insert input
function userChange(){
    var turn = event.target;

    if (user === "user1"){
        user = "user2";
        $(turn).text("X")
    }
    else{
        user = "user1";
        $(turn).text("O")
    }

}
// to check if the box is taken, and if it is then do not allow user input , otherwise go ahead
function boxTaken() {
    var turn = event.target;
    if (turn.textContent === "X" || turn.textContent === "O"){
        tie =0;
        swal("error", "choose an empty box", "error");
    }
    else{
        $(turn).text("X")
        userChange(event);   
    }

}
// to check if someone has won the game 
function checkWinner(){
    var turn = event.target;
    var boxIndex = $(".col").toArray();
    tie ++;
    var win;
    if (user === "user2"){
        win = "X";
    }
    else{
        win = "O";
    }
    if (
        (boxIndex[0].textContent === win && boxIndex[1].textContent === win && boxIndex[2].textContent === win) 
        ||
        (boxIndex[3].textContent === win && boxIndex[4].textContent === win && boxIndex[5].textContent === win) 
        ||
        (boxIndex[6].textContent === win && boxIndex[7].textContent === win && boxIndex[8].textContent === win) 
        ||
        (boxIndex[0].textContent === win && boxIndex[4].textContent === win && boxIndex[8].textContent === win) 
        ||
        (boxIndex[0].textContent === win && boxIndex[3].textContent === win && boxIndex[6].textContent === win) 
        ||
        (boxIndex[1].textContent === win && boxIndex[4].textContent === win && boxIndex[7].textContent === win) 
        ||
        (boxIndex[2].textContent === win && boxIndex[5].textContent === win && boxIndex[8].textContent === win) 
        ||
        (boxIndex[2].textContent === win && boxIndex[4].textContent === win && boxIndex[6].textContent === win) 
            ){
                
            if (win === "X"){
                    user2++;
                    $("#user2").text(`user2 score is ${user2}`);
                    swal("user2 won", `user2 score is ${user2}`, "success");
            }else if (win === "O"){
                    user1++;
                    $("#user1").text(`user1 score is ${user1}`);
                    swal("user1 won", `user1 score is ${user1}`, "success");
                    }
            tie = 0;
            gameOver++;
            user = "user2";
            }else if (tie === 9){
                tie = 0;
                gameOver++;
                user ="user2";
                swal("it is a tie", "you should restart the game", "info");
            }
    
}
function emptyMe(){
    event.preventDefault();
    tie = 0;
    gameOver = 0;
    $(".col").empty();
}
function resetMe(){
    user1 = 0;
    user2 = 0;
}
$(".col").on("click",testing)

$("#restart").on("click", emptyMe)
$("#reset").on("click", resetMe)