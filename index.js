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

