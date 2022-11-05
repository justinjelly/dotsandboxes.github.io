const P1COLOR = "#063B4B"; //dark blue green
const P2COLOR = "#DB3A34"; // red
const P3COLOR = "#E89005"; // yellow
const LINECOLOR = 'rgb(21, 112, 122)'; // rgb color of lines that are unclicked (sky blue)
const BOARDCOLOR = 'rgb(24, 128, 140)'; // board color and unclicked squares color (light blue)
const HOVERCOLOR = 'rgb(58, 152, 162)';

$(document).ready(function(){
    movesLeft = 24; // the amount of moves until the game is over
    squaresFilled = 0; // the number of squares that get filled each turnz

    // var to determine if the current player should play again (ie they got a square)
    playAgain = 0; // initialize to false

    // setting vars for player scores
    p1Score = 0; 
    p2Score = 0;
    p3Score = 0;

    // function to display alert when "how to play" button is pressed
    $(".howButton").click(function() {
        alert("The game starts with an empty grid of dots. 3 players take turns adding a single horizontal or vertical line between two unjoined adjacent dots. A player who completes the fourth side of a 1×1 box earns one point and takes another turn. The game ends when no more lines can be placed. The winner is the player with the most points!");
    });

    $(".retry").hide(); // hiding the retart buttons (which show whent he game ends)

    player = 1; // start with player 1
    $("#p1").addClass("activePlayer"); // make player 1 score underlined to indicate player turn

    // checking is any of the horizontal or vertical lines get clicked using jquery
    $(".vline").click(function(){
        if ($(this).css("background-color") == HOVERCOLOR) { // only if the line is the hover color, ie it has not been clicked yet
            $(this).css("background-color", pickColor());
            gameLoop();
        }
     });

     $(".hline").click(function(){
        if ($(this).css("background-color") == HOVERCOLOR) { // only if the line is the hover color, ie it has not been clicked yet
            $(this).css("background-color", pickColor());
            gameLoop();
        }
     });

     // functions to change color of lines on hover
     $(function() {
        $('.hline').hover(function(){
            $(this).addClass('hovered');
        },
        function(){
            $(this).removeClass('hovered');
        });
        
    });

    $(function() {
        $('.vline').hover(function(){
            $(this).addClass('hovered');
        },
        function(){
            $(this).removeClass('hovered');
        });
    });

});

// function to return the right color based on which players turn it is
function pickColor() {
    if (player == 1)        return P1COLOR;
    else if (player == 2)   return P2COLOR;
    else                    return P3COLOR;

}

// main game loop that begins once a line is clicked
function gameLoop() {
    movesLeft--; // reduces number of moves until board is full
    checkSquares(); // check if any squares are claimed
    updateScore(squaresFilled);
    nextPlayer(); // go to next player
    if (movesLeft == 0) endGame(); // if no moves left, game over
}

// function to logically and aesthetically change to the next player
function nextPlayer() {
    if (playAgain == 0) {
        if (player == 1) {
            player = 2;
            $("#p1").removeClass("activePlayer"); //remove p1 from active player class
            $("#p2").addClass("activePlayer"); //add p2 to active player class
            $("#p2").css("outline-color", pickColor()); // change outline color
        } else if (player == 2) {
            player = 3;
            $("#p2").removeClass("activePlayer");
            $("#p3").addClass("activePlayer");
            $("#p3").css("outline-color", pickColor());
        } else {
            player = 1;
            $("#p3").removeClass("activePlayer");
            $("#p1").addClass("activePlayer");
            $("#p1").css("outline-color", pickColor());
        } 
    }
}

// function to determine if any squares are claimed after a move is made
function checkSquares() {
    squaresFilled=0;
    playAgain=0;
    // square 1
    if ($("#hl1").css("background-color") != LINECOLOR && // hardcoding line logic based on ids of lines
        $("#hl4").css("background-color") != LINECOLOR &&
        $("#vl1").css("background-color") != LINECOLOR &&
        $("#vl2").css("background-color") != LINECOLOR &&
        $("#sq1").css("background-color") == BOARDCOLOR ) {
            playAgain=1;
            squaresFilled++;
            $("#sq1").css("background-color", pickColor()); // animate square changing color
        }
    // square 2
    if ($("#hl2").css("background-color") != LINECOLOR &&
        $("#hl5").css("background-color") != LINECOLOR &&
        $("#vl2").css("background-color") != LINECOLOR &&
        $("#vl3").css("background-color") != LINECOLOR &&
        $("#sq2").css("background-color") == BOARDCOLOR ) {
            playAgain=1;
            squaresFilled++;
            $("#sq2").css("background-color", pickColor());
        }
    // square 3
    if ($("#hl3").css("background-color") != LINECOLOR &&
        $("#hl6").css("background-color") != LINECOLOR &&
        $("#vl3").css("background-color") != LINECOLOR &&
        $("#vl4").css("background-color") != LINECOLOR &&
        $("#sq3").css("background-color") == BOARDCOLOR ) {
            playAgain=1;
            squaresFilled++;
            $("#sq3").css("background-color", pickColor());
        }  
    // square 4
    if ($("#hl4").css("background-color") != LINECOLOR &&
        $("#hl7").css("background-color") != LINECOLOR &&
        $("#vl5").css("background-color") != LINECOLOR &&
        $("#vl6").css("background-color") != LINECOLOR &&
        $("#sq4").css("background-color") == BOARDCOLOR ) {
            playAgain=1;
            squaresFilled++;
            $("#sq4").css("background-color", pickColor());
        }  
    // square 5
    if ($("#hl5").css("background-color") != LINECOLOR &&
        $("#hl8").css("background-color") != LINECOLOR &&
        $("#vl6").css("background-color") != LINECOLOR &&
        $("#vl7").css("background-color") != LINECOLOR &&
        $("#sq5").css("background-color") == BOARDCOLOR ) {
            playAgain=1;
            squaresFilled++;
            $("#sq5").css("background-color", pickColor());
        }  
    // square 6
    if ($("#hl6").css("background-color") != LINECOLOR &&
        $("#hl9").css("background-color") != LINECOLOR &&
        $("#vl7").css("background-color") != LINECOLOR &&
        $("#vl8").css("background-color") != LINECOLOR &&
        $("#sq6").css("background-color") == BOARDCOLOR ) {
            playAgain=1;
            squaresFilled++;
            $("#sq6").css("background-color", pickColor());
        }  
    // square 7
    if ($("#hl7").css("background-color") != LINECOLOR &&
        $("#hl10").css("background-color") != LINECOLOR &&
        $("#vl9").css("background-color") != LINECOLOR &&
        $("#vl10").css("background-color") != LINECOLOR &&
        $("#sq7").css("background-color") == BOARDCOLOR ) {
            playAgain=1;
            squaresFilled++;
            $("#sq7").css("background-color", pickColor());
        }  
    // square 8
    if ($("#hl8").css("background-color") != LINECOLOR &&
        $("#hl11").css("background-color") != LINECOLOR &&
        $("#vl10").css("background-color") != LINECOLOR &&
        $("#vl11").css("background-color") != LINECOLOR &&
        $("#sq8").css("background-color") == BOARDCOLOR ) {
            playAgain=1;
            squaresFilled++;
            $("#sq8").css("background-color", pickColor());
        }  
    // square 9
    if ($("#hl9").css("background-color") != LINECOLOR &&
        $("#hl12").css("background-color") != LINECOLOR &&
        $("#vl11").css("background-color") != LINECOLOR &&
        $("#vl12").css("background-color") != LINECOLOR &&
        $("#sq9").css("background-color") == BOARDCOLOR ) {
            playAgain=1;
            squaresFilled++;
            $("#sq9").css("background-color", pickColor());
        }   
}

// function to update the score based on whether squares were claimed during the move
function updateScore(score) {
    if (player == 1) {
        p1Score+=score;
        document.getElementById("p1s").innerHTML = p1Score;
    } else if (player == 2) {
        p2Score+=score;
        document.getElementById("p2s").innerHTML = p2Score;
    } else{
        p3Score+=score;
        document.getElementById("p3s").innerHTML = p3Score;
    }                    
}

// function that executes when there are no moves left.
function endGame() {
    winningScore = Math.max(p1Score, p2Score, p3Score);

    if (winningScore == p1Score) winner = "Player 1";
    else if (winningScore == p2Score) winner = "Player 2";
    else winner = "Player 3";

    if (p1Score == p2Score && p2Score == p3Score) winner = "3-Way tie";
    else if (winningScore == p1Score && p1Score == p2Score) winner = "Tie with player 1 and 2";
    else if (winningScore == p3Score && p3Score == p2Score) winner = "Tie with player 2 and 3";
    
    setTimeout(popup, 500);
}

function popup() {
    window.alert("😵🎮🕹️GAME OVER!🕹️🎮😵\nWinner: "+winner+"!");
    $(".retry").show();
}
