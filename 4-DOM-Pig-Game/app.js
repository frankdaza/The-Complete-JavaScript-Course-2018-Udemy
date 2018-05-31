/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, diceDOM, score0, 
    score1, current0, current1, panel0, panel1, btnRoll
    btnHold;

init();

// Manage the die and current score
btnRoll.addEventListener("click", function() {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // 3. Update the round score if the rolled number was not a 1
    if (dice !== 1) {
        // Add score        
        roundScore += dice;

        if (activePlayer === 0) {
            current0.textContent = roundScore;
        } else {
            current1.textContent = roundScore;
        }
    } else {
        // Next player
        nextPlayer();
    }
});

// Manage the hold function
btnHold.addEventListener("click", function() {
    // Add current score to global score
    scores[activePlayer] += roundScore;

    // Update the UI
    if (activePlayer === 0)
        score0.textContent = scores[activePlayer];
    else
        score1.textContent = scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 10) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      diceDOM.style.display = "none";
      btnRoll.disabled = true;
      btnHold.disabled = true;


      if (activePlayer === 0) {
        panel0.classList.add("winner");
        panel0.classList.remove("active");
      } else {
        panel1.classList.add("winner");
        panel1.classList.remove("active");
      }

    } else {
      nextPlayer();
    }
});

function nextPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;
    current0.textContent = "0";
    current1.textContent = "0";
    diceDOM.style.display = "none";
    panel0.classList.toggle("active");
    panel1.classList.toggle("active");
};

// Manage new game
document.getElementById("btnNew").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  btnRoll = document.getElementById("btnRoll");
  btnRoll.disabled = false;

  btnHold = document.getElementById("btnHold");
  btnHold.disabled = false;

  diceDOM = document.getElementById("diceIMG");
  diceDOM.style.display = "none";

  score0 = document.getElementById("score-0");
  score0.textContent = "0"

  score1 = document.getElementById("score-1");
  score1.textContent = "0"

  current0 = document.getElementById("current-0");
  current0.textContent = "0"

  current1 = document.getElementById("current-1");
  current1.textContent = "0"

  panel0 = document.getElementById("panel0");
  panel0.classList.remove("winner");
  panel0.classList.remove("winner");
  panel0.classList.add("active");

  panel1 = document.getElementById("panel1");
  panel1.classList.remove("winner");
  panel1.classList.remove("active");

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
};