"use strict";
const compEl = document.getElementById("comp-score");
const userEl = document.getElementById("user-score");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");
let winner;
const displayMessage = document.getElementById("message");
const message = function () {
  displayMessage.innerText = `Your choice:${userRes}, Computer choice:${compRes} ${winner} won `;
};
const choices = ["rock", "paper", "scissor"];
let compRes;
let userRes;
let computerScore = 0;
let userScore = 0;
const computerResponse = function () {
  const res = Math.floor(Math.random() * 3);
  // console.log(res);
  return (compRes = choices[res]);
};
const onClick = function () {
  computerResponse();
  console.log(`user response: ${userRes} `);
  console.log(`computer response: ${compRes} `);
  checkWinner();
  message();
  compEl.innerText = computerScore;
  userEl.innerText = userScore;
};
rockBtn.addEventListener("click", function () {
  userRes = "rock";
  onClick();
});
paperBtn.addEventListener("click", function () {
  userRes = "paper";

  onClick();
});
scissorsBtn.addEventListener("click", function () {
  userRes = "scissor";

  onClick();
});

resetBtn.addEventListener("click", function () {
  console.log("reset button clicked");
  userScore = computerScore = 0;
  compEl.innerText = computerScore;
  userEl.innerText = userScore;
  displayMessage.innerText = "let's start";
});
const checkWinner = function () {
  if (
    (userRes === "rock" && compRes === "scissor") ||
    (userRes === "scissor" && compRes === "paper") ||
    (userRes === "paper" && compRes === "rock")
  ) {
    console.log("user won");
    userScore++;
    winner = "User";
  } else if (userRes === compRes) {
    console.log("it's a tie");
    winner = "NOBODY";
  } else {
    console.log("comp won");
    computerScore++;
    winner = "COMPUTER";
  }
};

// const checkWinner = function () {
//   if (userRes === compRes) {
//     console.log("tie");
//   }
//   if (userRes === "rock" && compRes === "paper") {
//     console.log("comp won");
//   }
//   if (userRes === "rock" && compRes === "scissor") {
//     console.log("user won");
//   }
//   if (userRes === "paper" && compRes === "rock") {
//     console.log("user won");
//   }
//   if (userRes === "paper" && compRes === "scissor") {
//     console.log("comp won");
//   }
//   if (userRes === "scissor" && compRes === "rock") {
//     console.log("comp won");
//   }
//   if (userRes === "scissor" && compRes === "paper") {
//     console.log("comp won");
//   }
// };

// const checkWinner = function () {
//   if (userRes === "rock" && compRes === "rock") {
//     console.log("tie");
//   }
//   if (userRes === "rock" && compRes === "paper") {
//     console.log("comp won");
//   }
//   if (userRes === "rock" && compRes === "scissor") {
//     console.log("user won");
//   }
//   if (userRes === "paper" && compRes === "rock") {
//     console.log("user won");
//   }
//   if (userRes === "paper" && compRes === "paper") {
//     console.log("tie ");
//   }
//   if (userRes === "paper" && compRes === "scissor") {
//     console.log("comp won");
//   }
//   if (userRes === "scissor" && compRes === "rock") {
//     console.log("comp won");
//   }
//   if (userRes === "scissor" && compRes === "paper") {
//     console.log("comp won");
//   }
//   if (userRes === "scissor" && compRes === "scissor") {
//     console.log("tie");
//   }
// };
