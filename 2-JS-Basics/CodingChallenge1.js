// CODING CHALLENGE 1

// I get the number of player (2 or 3).
var numberPlayers = prompt("Input de number of players (2 or 3)");

// I store the values of the height and age, and
// calculate the score.
var player1, player2, player3;
var age1, age2, age3;
var height1, height2, height3;
var score1, score2, score3;

if (numberPlayers == 2) {
    player1 = prompt("Enter the name of Player 1");
    height1 = prompt("Enter the height of Player 1");
    age1 = prompt("Enter the age of Player 1");
    score1 = Number(height1) + 5 * Number(age1);
    alert("The score of player 1 is: " + score1);

    player2 = prompt("Enter the name of Player 2");
    height2 = prompt("Enter the height of Player 2");
    age2 = prompt("Enter the age of Player 2");
    score2 = Number(height2) + 5 * Number(age2);
    alert("The score of player 2 is: " + score2);

    // I print the name and score of the winner.
    if (score1 > score2) {
        alert("The winner is Player 1 (" + player1 + ") with the score: " + score1);
    } else if (score2 > score1) {
        alert("The winner is Player 2 (" + player2 + ") with the score: " + score2);
    } else {
        alert("The players are tie with the score: " + score1);
    }
} else {
    player1 = prompt("Enter the name of Player 1");
    height1 = prompt("Enter the height of Player 1");
    age1 = prompt("Enter the age of Player 1");
    score1 = Number(height1) + 5 * Number(age1);
    alert("The score of player 1 is: " + score1);

    player2 = prompt("Enter the name of Player 2");
    height2 = prompt("Enter the height of Player 2");
    age2 = prompt("Enter the age of Player 2");
    score2 = Number(height2) + 5 * Number(age2);
    alert("The score of player 2 is: " + score2);

    player3 = prompt("Enter the name of Player 3");
    height3 = prompt("Enter the height of Player 3");
    age3 = prompt("Enter the age of Player 3");
    score3 = Number(height3) + 5 * Number(age3);
    alert("The score of player 3 is: " + score3);

    // I print the name and score of the winner.
    if (score1 > score2 && score1 > score3) {
        alert("The winner is Player 1 (" + player1 + ") with the score: " + score1);
    } else if (score2 > score1 && score2 > score3) {
        alert("The winner is Player 2 (" + player1 + ") with the score: " + score2);
    } else if (score3 > score1 && score3 > score2) {
        alert("The winner is Player 3 (" + player1 + ") with the score: " + score3);
    } else {
        alert("The players are tie with the score: " + score1);
    }
}