// empty boxes to start to play with 
// 8 cases of winning/losing , and everthing else will be tie <<< using if condintions/loops
// create two users , making the game rotating between them after the first chooses
// when the game ends a page will pop congrating the user
//if the game ended it will restart itself again 

//use array to collect data


// -----------------------
var countChance = 0;
var blockToWin = 0;
var user = "user2"
var user1 = 0;
var user2 = 0;
var tie=0;
var round = 0;
var computerBox = $(".col").toArray()
var gameOver = 0;
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
function takeCorner(){
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
// function winOrBlock(){

// }

function testing(event){
    
    var turn = event.target;
    if (turn.textContent === "X" || turn.textContent === "O"){
        alert("wrong Box")
    }
    // boxTaken(event);
    else if(gameOver === 1){
        console.log("you already have a winner")
    }
   else{
        $(turn).text("O")  
        computerTurn();
        checkWinner("X");
        checkWinner("O");
        
   }
    

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
// function boxTaken() {
//     var turn = event.target;
//     if (turn.textContent === "X" || turn.textContent === "O"){
//         alert("error")
//     }
//     else{
//         $(turn).text("O")
//         // userChange(event);   
//     }

// }
// to check if someone has won the game - I need to change var to know who wins
function checkWinner(win){
    // var turn = event.target;
    // var boxIndex = $(".col").toArray();
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
                tie = 0;
            // if (win === "X"){
            //         user2++;
            //         $("#user2").text(`user2 score is ${user2}`);
            // }else if (win === "O"){
            //         user1++;
            //         $("#user1").text(`user1 score is ${user1}`);
            //         }
            console.log(` ${user} just won`)
            // $(".col").empty();
             gameOver++;
            }else if (tie === 9){
                alert(`it's a tie`)
                // location.reload(true);
                // $(".col").empty();
            }
    
}

function computerTurn(event){
    
    round++;
    if (round === 1){
        
        takeCorner();
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
                                        if(n === 5){
                                            $(computerBox[1]).text("X")
                                        }
                                        else{
                                        pos = i + 1;
                                        $(computerBox[pos]).text("X");
                                        }
                                        break;
                                    case (i + 1):
                                        if ( i === 1){
                                            pos = i - 1;
                                        $(computerBox[pos]).text("X")
                                        }else if(n ===3 && i ===2){
                                            $(computerBox[1]).text("X")
                                        }
                                        else{
                                        pos = n + 1;
                                        $(computerBox[pos]).text("X")
                                        }
                                        break;
                                    case ( i + 3):
                                        if(n === 5){
                                            pos = n + 3;
                                            $(computerBox[pos]).text("X");
                                        }
                                        else if(n === 6){
                                            pos = n - 6;
                                            $(computerBox[pos]).text("X")
                                        }
                                        else{
                                        pos = n + 3;
                                        $(computerBox[pos]).text("X")
                                        }
                                        break;
                                    case(i + 4):
                                        if (i === 1 && n === 5){
                                            $(computerBox[2]).text("X")
                                        }else{
                                        $(computerBox[3]).text("X")
                                        }
                                        break;
                                    case (i + 5):
                                        $(computerBox[3]).text("X")
                                        break;
                                    case (i + 6):
                                        pos = i + 3;
                                        $(computerBox[pos]).text("X")
                                        break;
                                    
                                }
                            }else{
                                switch(n){
                                    case (i + 2):
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
                                        pos = n - 6;
                                        $(computerBox[pos]).text("X")
                                        break;
                                    case (i + 6):
                                        if (n === 7){
                                            $(computerBox[3]).text("X")
                                        }else{
                                        pos = i + 3;
                                         $(computerBox[pos]).text("X")
                                        }
                                        break;
                                    case(7):
                                        if(i === 0 || i === 2){
                                            $(computerBox[3]).text("X")
                                        }
                                        else if (i === 3){
                                            $(computerBox[6]).text("X")
                                        }
                                        break;
                                    case(8):
                                        if ( i === 0){
                                            $(computerBox[1]).text("X")
                                        }
                                        else if (i === 3){
                                            $(computerBox[6]).text("X")
                                        }
                                        else{
                                            $(computerBox[3]).text("X")
                                        }
                                        break;
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
                }                
        }else{
            for (var i =0 ; i < computerBox.length; i++){
                if(computerBox[i].textContent === "O"){
                    for (var n = 0; n <=8 ; n++){ 
                        if (n === i) { continue; }
                        if (computerBox[n].textContent === "O"){
                            if (n%2 === 0 && i%2 ===0 ){
                                switch(n+i){
                                    case (6):
                                        $(computerBox[6]).text("X")
                                        break;
                                    case (10):
                                        $(computerBox[2]).text("X")
                                        break;
                                    case(12):
                                        $(computerBox[6]).text("X")
                                        break;
                    }
                }       
                            else if (n%2 !==0 || i%2 !== 0){
                                switch(n+i){
                                    case(5):
                                        $(computerBox[7]).text("X")
                                        break;
                                    case(7):
                                        $(computerBox[5]).text("X")
                                        break;
                                    case(11):
                                        $(computerBox[1]).text("X")
                                        break;
                                    case(9):
                                        $(computerBox[3]).text("X")
                                        break;
                                }
                            }
                            else{
                                
                                takeCorner();
                            }
            }
            }
        }
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
        for (var i = 0; i < winningCases.length; i++){
            var currentArray = winningCases[i];
            countChance = 0;
            for (var a = 0; a < currentArray.length; a++){
                winIndex = currentArray[a];
                // console.log(winIndex)
               if(computerBox[winIndex].textContent === "X"){
                   countChance ++;
                   
                   if (countChance === 2){
                        for (s in currentArray){
                            var block = currentArray[s];
                            if (computerBox[block].textContent === ""){
                                return $(computerBox[block]).text("X")
                        }
                        else{
                            var cornerCount = 0;
                            if (computerBox[0].textContent !== ""){
                                cornerCount++;
                            }
                            if (computerBox[2].textContent !== ""){
                                cornerCount++;
                            }
                            if (computerBox[6].textContent !== ""){
                                cornerCount++;
                            }
                            if (computerBox[8].textContent !== ""){
                                cornerCount++;
                            }
                            if (cornerCount === 3){
                                if (computerBox[5].textContent === ""){
                                    if ( computerBox[1].textContent === "O"){
                                        return $(computerBox[7]).text("X")
                                    }
                                    else{
                                    return $(computerBox[5]).text("X")
                                    }
                                }
                                else if (computerBox[3].textContent === ""){
                                    return $(computerBox[3]).text("X")
                                }

                                // else{
                                //     return takeCorner();
                                // }
                            }
                            if (cornerCount === 2){
                                if (computerBox[5].textContent === "O" && computerBox[8].textContent === ""){
                                    return $(computerBox[8]).text("X")
                                }
                                else{
                                return takeCorner();
                                }
                            }
                           
                        }
                    }
                }
               }else{ 
                        if (
                            (computerBox[currentArray[0]].textContent === "" && ((computerBox[currentArray[1]].textContent === "X" && computerBox[currentArray[2]].textContent === "X") || (computerBox[currentArray[1]].textContent === "O" && computerBox[currentArray[2]].textContent === "O")))
                            ||
                            (computerBox[currentArray[1]].textContent === "" && ((computerBox[currentArray[0]].textContent === "X" && computerBox[currentArray[2]].textContent === "X") || (computerBox[currentArray[0]].textContent === "O" && computerBox[currentArray[2]].textContent === "O")))
                            ||
                            (computerBox[currentArray[2]].textContent === "" && ((computerBox[currentArray[1]].textContent === "X" && computerBox[currentArray[0]].textContent === "X") || (computerBox[currentArray[1]].textContent === "O" && computerBox[currentArray[0]].textContent === "O")))
                            )
                            {
                                if (computerBox[currentArray[0]].textContent === ""){
                                    return $(computerBox[currentArray[0]]).text("X")
                                }
                                else if (computerBox[currentArray[1]].textContent === ""){
                                    return $(computerBox[currentArray[1]]).text("X")
                                }else if (computerBox[currentArray[2]].textContent === ""){
                                    return $(computerBox[currentArray[2]]).text("X")
                                }
                                // else{
                                //     return takeCorner();
            
                                // }

                        }
                    
            }
            //  else if(computerBox[winIndex].textContent === "O"){
            //          for (s in currentArray){
            //              var block = currentArray[s];
            //              if (computerBox[block].textContent === ""){
            //                  countChance++
            //                  if (countChance === 2){
            //                      console.log(block);
            //                     return $(computerBox[block]).text("X");
                                
            //                  }
            //          } 
            //      }
            // }
               
               
            }
        }
 
    // winOrBlock();
    }
    if (round === 4){
        // need to go through the array to figure out the bugs that I have and to close all the winning cases 
    //     if (takeCorner()){
    //         return;
    //     }
    //     else{
    //         if (computerBox[1].textContent === "" && computerBox[5].textContent === "" && computerBox[8].textContent !== "" ){
                
    //             return $(computerBox[5]).text("X");
    //         }
    //         else{
    //             for (emptyBox in computerBox){
    //                 if (computerBox[emptyBox].textContent === ""){
    //                     return $(computerBox[emptyBox]).text("X");
    //                 }
    //             }
    //     }
    // }
            for (var i = 0; i < winningCases.length; i++){
                var currentArray = winningCases[i];
                countChance = 0;
                for (var a = 0; a < currentArray.length; a++){
                    winIndex = currentArray[a];
                    if (
                        (computerBox[currentArray[0]].textContent === "" && ((computerBox[currentArray[1]].textContent === "X" && computerBox[currentArray[2]].textContent === "X") || (computerBox[currentArray[1]].textContent === "O" && computerBox[currentArray[2]].textContent === "O")))
                        ||
                        (computerBox[currentArray[1]].textContent === "" && ((computerBox[currentArray[0]].textContent === "X" && computerBox[currentArray[2]].textContent === "X") || (computerBox[currentArray[0]].textContent === "O" && computerBox[currentArray[2]].textContent === "O")))
                        ||
                        (computerBox[currentArray[2]].textContent === "" && ((computerBox[currentArray[1]].textContent === "X" && computerBox[currentArray[0]].textContent === "X") || (computerBox[currentArray[1]].textContent === "O" && computerBox[currentArray[0]].textContent === "O")))
                        )
                        {
                            if (computerBox[currentArray[0]].textContent === ""){
                                return $(computerBox[currentArray[0]]).text("X")
                            }
                            else if (computerBox[currentArray[1]].textContent === ""){
                                return $(computerBox[currentArray[1]]).text("X")
                            }else if (computerBox[currentArray[2]].textContent === ""){
                                return $(computerBox[currentArray[2]]).text("X")
                            }
                            // else{
                            //     return takeCorner();
        
                            // }

                    }
                }
            }
        // winOrBlock();
    }
}
function empty(){
    $(".col").empty();
    tie = 0;
    round = 0;
    gameOver = 0;
}
$(".col").on("click",testing);
$("#restart").on("click", empty)