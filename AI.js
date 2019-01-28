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
var round = 0;
var computerBox = $(".col").toArray()

function testing(event){
    
    var turn = event.target;
   
    boxTaken(event);
   
    checkWinner(event);
    computerTurn();

}
// to change between users at every click and to insert input
// function userChange(){
//     var turn = event.target;

//     if (user === "user1"){
//         user = "user2";
//         $(turn).text("X")
//     }
//     else{
//         user = "user1";
//         $(turn).text("O")
//     }

// }
// to check if the box is taken, and if it is then do not allow user input , otherwise go ahead
function boxTaken() {
    var turn = event.target;
    if (turn.textContent === "X" || turn.textContent === "O"){
        alert("error")
    }
    else{
        $(turn).text("O")
        // userChange(event);   
    }

}
// to check if someone has won the game - I need to change var to know who wins
function checkWinner(){
    // var turn = event.target;
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
                tie = 0;
            if (win === "X"){
                    user2++;
                    $("#user2").text(`user2 score is ${user2}`);
            }else if (win === "O"){
                    user1++;
                    $("#user1").text(`user1 score is ${user1}`);
                    }
            alert(` ${user} just won`)
            $(".col").empty();
            }else if (tie === 9){
                alert(`it's a tie`)
                // location.reload(true);
                $(".col").empty();
            }
    
}

function computerTurn(){
    
    round++;
    // console.log(round)
    if (round === 1){
        if (computerBox[4].textContent === ''){
            $(computerBox[4]).text("X");
        }
        else{
            $(computerBox[0]).text("X");
        }
    }
    if (round === 2){
        if (computerBox[4].textContent === "X"){
            for (var i =0 ; i < computerBox.length; i++){
                if (computerBox[i].textContent === "O"){
                    for (var n = 0; n <=8 ; n++){ 
                        if (n === i) { continue; }
                        var pos;
                        if (computerBox[n].textContent === "O"){
                            if (n <= 6 && i < 5){
                                switch(n){
                                    case (i + 2):
                                        pos = i + 1;
                                        $(computerBox[pos]).text("X");
                                        break;
                                    case (i + 1):
                                        pos = n + 1;
                                        $(computerBox[pos]).text("X")
                                        break;
                                    case ( i + 3):
                                        if(n === 5){
                                            pos = n + 3;
                                            $(computerBox[pos]).text("X");
                                        }else{
                                        pos = n - 6;
                                        $(computerBox[pos]).text("X")
                                        }
                                        break;
                                    case (i + 6):
                                        pos = i + 3;
                                        console.log(pos)
                                        $(computerBox[pos]).text("X")
                                        break;
                                }
                            }else{
                                switch(n){
                                    case (i + 2):
                                        console.log('here')
                                        pos = n - 1;
                                        $(computerBox[pos]).text("X");
                                        break;
                                    case (i + 1 ):
                                        if(n === 8){
                                            pos = i - 1;
                                            $(computerBox[pos]).text("X");
                                        }else{
                                            pos = n + 1;
                                            $(computerBox[pos]).text("X")
                                        }
                                        break;
                                    case (i + 3):
                                        console.log('hi')
                                        pos = n - 6;
                                        $(computerBox[pos]).text("X")
                                        break;
                                    // case (i + 6):
                                    //     console.log('here')
                                    //     pos = i + 3;
                                    //     console.log(pos)
                                    //     $(computerBox[pos]).text("X")
                                    //     break;
                                }
                            }
                            // if (n === i + 2){
                            //     pos = i + 1;
                            //     $(computerBox[pos]).text("X")
                            // }
                            // else if (n === i + 1){
                            //     pos = n + 1;
                            //     $(computerBox[pos]).text("X")
                            // }
                        }

                    }
                }
                // var num2 = i + 2
                // if (computerBox[i].textContent === "O" && computerBox[num2].textContent === "O"){
                //     var dif = i + 1;
                //     $(computerBox[dif]).text("X");
                }                
            }
            // for(var i = 1; i <= 7; i+=2){
            //     if(computerBox[i].textContent !== ""){
            //         if(computerBox[i+3].textContent !== ""){
            //             $(computerBox[i-3]).text("X");
            //         }else if (computerBox[i-3].textContent !== ""){
            //             $(computerBox[i+3]).text("X");
            //         }
            //     }
            // }
        // if (computerBox[4].textContent === "X"){
        //     for( var i = 0; i <= computerBox.length; i+=2){
        //         if (computerBox[i].textContent === ""){
        //            return $(computerBox[i]).text("X");
        //         }
        //     }
        // }
    }
    if (round === 3){

    }
}

$(".col").on("click",testing);
