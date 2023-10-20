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

function singleRound(playerSel, compSel) {
  playerSel = playerSel.toLowerCase();
  if (playerSel===choices[0]&&compSel===choices[1]){
    return 'Paper beats rock! You lose'
  }else if(playerSel===choices[1]&& compSel==choices[2]){
    return 'Scissors beats paper! You lose'
  }
  else if(playerSel===choices[2]&& compSel==choices[0]){
    return 'Rock beats Scissors! You lose'
  }
  else if(playerSel===choices[1]&& compSel==choices[0]){
    return 'Paper beats rock! You win'
  }
  else if(playerSel===choices[2]&& compSel==choices[1]){
    return 'Scissors beats Paper! You win'
  }
  else if(playerSel===choices[0]&& compSel==choices[2]){
    return 'Rock beats Scissors! You win'
  }else{
    return 'It is a draw'
  }
  
}

let playerSelection='rock'
let compSelection=getCompChoice()

console.log(singleRound(playerSelection,compSelection))
