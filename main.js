// empty boxes to start to play with 
// 8 cases of winning/losing , and everthing else will be tie <<< using if condintions/loops
// create two users , making the game rotating between them after the first chooses
// when the game ends a page will pop congrating the user
//if the game ended it will restart itself again 

//use array to collect data


// -----------------------
var user = "user2"
var user1 = 0;
var user2 = 0;
var tie=0;

function testing(event){
    
    var turn = event.target;
   
    boxTaken(event);
   
    checkWinner(event);

}
// to change between users at every click and to insert input
function userChange(){
    var turn = event.target;

    if (user === "user1"){
        user = "user2";
        user2 += 1;
        $(turn).text("X")
    }
    else{
        user = "user1";
        user1 +=1;
        $(turn).text("O")
    }

}
// to check if the box is taken, and if it is then do not allow user input , otherwise go ahead
function boxTaken() {
    var turn = event.target;
    if (turn.textContent === "X" || turn.textContent === "O"){
        alert("error")
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
    tie += 1;
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
        alert(` ${user} just won`)
        location.reload(true);
            }else if (tie === 9){
                alert(`it's a tie`)
                location.reload(true);

            }
    
}


$(".col").on("click",testing)

