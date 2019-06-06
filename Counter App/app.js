let score = 0
let scoreBoard = document.getElementById("score-board");
const plusButton = document.getElementById("plus-button");
const subtractButton = document.getElementById("subtract-button");
const reset_span = document.getElementById("reset");
let statement_p = document.getElementById("statement");

//when user picks plus, add 1
function plus(){
    score++;
    scoreBoard.innerHTML = score;
    statement_p.innerHTML = "You added one!";
}
//when user picks subtract, minus 1
function subtract(){
    score--;
    scoreBoard.innerHTML = score;
    statement_p.innerHTML = "You subtracted one!";
}

function reset(){
    score = 0;
    scoreBoard.innerHTML = score;
    statement_p.innerHTML = "You reseted the counter";
}



//main, displays results
function main(){
    plusButton.addEventListener('click',function(){
       plus()
    })

    subtractButton.addEventListener('click',function(){
       subtract()
    })

    reset_span.addEventListener('click',function(){
        reset()
    })
}  

main();