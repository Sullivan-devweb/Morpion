let currentPlayer = "X";

function play(num) {
    if (currentPlayer === "X") {
        currentPlayer = "O";
        
    } 
        else {
        currentPlayer = "X";

    }
    document.getElementById("play"+num).innerHTML = currentPlayer;
    console.log("c'est au tour de : " + currentPlayer );
}



