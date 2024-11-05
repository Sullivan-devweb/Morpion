let currentPlayer = "X";

function play(num) {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    document.getElementById("play" + num).innerHTML = currentPlayer;
    console.log("C'est au tour de : " + currentPlayer);

    if (checkWin()) {
        return;
    }
}

function checkWin() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (document.getElementById("play" + (i * 3)).innerHTML === "X" &&
            document.getElementById("play" + (i * 3 + 1)).innerHTML === "X" &&
            document.getElementById("play" + (i * 3 + 2)).innerHTML === "X") {
            alert("Player X wins!");
            return true;
        }
        if (document.getElementById("play" + (i * 3)).innerHTML === "O" &&
            document.getElementById("play" + (i * 3 + 1)).innerHTML === "O" &&
            document.getElementById("play" + (i * 3 + 2)).innerHTML === "O") {
            alert("Player O wins!");
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (document.getElementById("play" + i).innerHTML === "X" &&
            document.getElementById("play" + (i + 3)).innerHTML === "X" &&
            document.getElementById("play" + (i + 6)).innerHTML === "X") {
            alert("Player X wins!");
            return true;
        }
        if (document.getElementById("play" + i).innerHTML === "O" &&
            document.getElementById("play" + (i + 3)).innerHTML === "O" &&
            document.getElementById("play" + (i + 6)).innerHTML === "O") {
            alert("Player O wins!");
            return true;
        }
    }

    // Check diagonals
    if (document.getElementById("play0").innerHTML === "X" &&
        document.getElementById("play4").innerHTML === "X" &&
        document.getElementById("play8").innerHTML === "X") {
        alert("Player X wins!");
        return true;
    }
    if (document.getElementById("play0").innerHTML === "O" &&
        document.getElementById("play4").innerHTML === "O" &&
        document.getElementById("play8").innerHTML === "O") {
        alert("Player O wins!");
        return true;
    }
    if (document.getElementById("play2").innerHTML === "X" &&
        document.getElementById("play4").innerHTML === "X" &&
        document.getElementById("play6").innerHTML === "X") {
        alert("Player X wins!");
        return true;
    }
    if (document.getElementById("play2").innerHTML === "O" &&
        document.getElementById("play4").innerHTML === "O" &&
        document.getElementById("play6").innerHTML === "O") {
        alert("Player O wins!");
        return true;
    }

    // Check if all cells are filled
    let allFilled = true;
    for (let i = 0; i < 9; i++) {
        if (document.getElementById("play" + i).innerHTML === "") {
            allFilled = false;
            break;
        }
    }
    if (allFilled) {
        alert("C'est un match nul!");
        return true;
    }

    return false;
}


