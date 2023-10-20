let choices = ["rock", "paper", "scissors"];
function getCompChoice() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return choices[0];
      break;
    case 1:
      return choices[1];
      break;
    case 2:
      return choices[2];
      break;
  }
}
function getPlayerChoice() {
  let playerSelection = prompt("Enter Your Choice:");

  playerSelection = playerSelection.toLowerCase();
  if (
    playerSelection == choices[0] ||
    playerSelection == choices[1] ||
    playerSelection == choices[2]
  ) {
    return playerSelection;
  } else {
    alert("Invalid Choice");
  }
}
function singleRound(playerSel, compSel) {
  if (playerSel === choices[0] && compSel === choices[1]) {
    return "Paper beats rock! You lose";
  } else if (playerSel === choices[1] && compSel == choices[2]) {
    return "Scissors beats paper! You lose";
  } else if (playerSel === choices[2] && compSel == choices[0]) {
    return "Rock beats Scissors! You lose";
  } else if (playerSel === choices[1] && compSel == choices[0]) {
    return "Paper beats rock! You win";
  } else if (playerSel === choices[2] && compSel == choices[1]) {
    return "Scissors beats Paper! You win";
  } else if (playerSel === choices[0] && compSel == choices[2]) {
    return "Rock beats Scissors! You win";
  } else if (playerSel === choices[0] && compSel == choices[0]) {
    return "Its a draw";
  } else if (playerSel === choices[1] && compSel == choices[1]) {
    return "Its a draw";
  } else if (playerSel === choices[2] && compSel == choices[2]) {
    return "Its a draw";
  } else {
    return null;
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();

    let compSelection = getCompChoice();
    let result=singleRound(playerSelection, compSelection);
    console.log(result)
    if(result==='Paper beats rock! You lose'|| result==='Scissors beats paper! You lose'|| result==='Rock beats Scissors! You lose'){
        compScore+=1
    }else if(result==='Paper beats rock! You win'||result==='Scissors beats Paper! You win'||result==='Rock beats Scissors! You win'){
        playerScore+=1
    }
  }
  if(playerScore>compScore){
    console.log(`Player Wins The Game (${playerScore}-${compScore}!! Play Again?`)
  }else if(compScore>playerScore){
    console.log(`You lose the game (${playerScore}-${compScore})! Play Again?`)
  }else{
    console.log('It is a draw. Play Again?')
  }
}
game();
