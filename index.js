const options = document.querySelector(".options");
const winner = document.querySelector(".winnername");
const winnerimage = document.querySelector(".winnerimage");
const slot = document.querySelector(".slot");
const lifeDetails = document.querySelector(".lifeDetails");
const lifenos = document.querySelector(".lifenos");
const computer = document.querySelector(".computer");
const winnername = document.querySelector('.winnername');
const restart = document.querySelector('.reset');
const computerChoice = document.querySelector('.computerChoice');
const playerchoice = document.querySelector('.playerchoice');
let computerLife = 3;
let playerLife = 3;
let userScore = 0;
let computerScore = 0;
let roundWinner = '';
let champion = '';
let userChoices = [0, 1, 2];//o for stone 1 for paper 2 for scissors
winnerimage.innerHTML = `<img src='./images/vs.webp'>`;
winnername.innerHTML = 'let the game begin..';
const colors = [
  '#7c4dff',
  '#0091ea', '#ff9100', '#ff1744'
]
const choiceImages = [
  './images/Dirt.webp',
  './images/papericon.webp',
  './images/scissorsicon.png'
];
const winnerImages = [
  './images/computer.webp',
  './images/player.webp',
  './images/tie.webp'
]
function decide(i) {
  if (i <= 30) {
    return 0;
  }
  else if (i <= 60) {
    return 1;
  }
  else {
    return 2;
  }
}
function winnerImageShower(roundWinner) {
  if (roundWinner == 'computer') {
    winnerimage.innerHTML = `<img src=${winnerImages[0]}>`;
    winnername.innerHTML = `In this round ${roundWinner} won`;

  }
  else if (roundWinner === 'player') {
    winnerimage.innerHTML = `<img src=${winnerImages[1]}>`;
    winnername.innerHTML = `In this round ${roundWinner} won`;
  }
  else {

    winnerimage.innerHTML = `<img src=${winnerImages[2]}>`;
    winnername.innerHTML = `oops.... It is a tie`;
  }
}
const lifeimagefunction = () => {
  let lifeimages = ``;
  for (let i = 0; i < playerLife; i++) {
    lifeimages += `<img src='./images/heart.webp'>`;
  }
  lifenos.innerHTML = lifeimages
}
function reset() {
  computerChoice.innerHTML = ``;
  playerchoice.innerHTML = ``;
  computerLife = 3;
  playerLife = 3;
  winnerimage.innerHTML = `<img src='./images/vs.webp'>`;
  winnername.innerHTML = 'let the game begin..';
  lifeimagefunction();
  console.log(computer);


}
function championEffect() {
  const overlay = document.createElement('div');
  const finaldisplay = document.createElement('div');
  const champcontent = document.createElement('div');
  const buttoncontent = document.createElement('div');
  const button = document.createElement('button');
  overlay.setAttribute('class', 'disChamp');
  champcontent.setAttribute('class', 'champcontent');
  finaldisplay.setAttribute('class', 'finaldisplay');
  buttoncontent.setAttribute('class', 'buttoncontent');
  button.onclick = () => {
    reset();
    document.body.removeChild(overlay);

  }
  button.innerHTML = 'Restart';
  for (let i = 0; i < 4; i++) {
    const championname = document.createElement('div');
    let string=champion=='player'?"won":"lost"
    championname.innerHTML = `<p>You ${string} </p>`;
    championname.setAttribute('class', 'championname');
    championname.style.color = colors[i];
    champcontent.appendChild(championname);
  }
  buttoncontent.appendChild(button);
  finaldisplay.appendChild(buttoncontent)
  finaldisplay.appendChild(champcontent);
  overlay.appendChild(finaldisplay);
  document.body.appendChild(overlay);


}

lifeimagefunction();
const slotfunction = () => {
  let random = decide(Math.random() * 100);
  slot.innerHTML = `<img src=${choiceImages[random]}>`;
}
const iterval = setInterval(slotfunction, 1000);
const findWinner = (playerMove) => {
  if (computerLife === 0) {
    champion = 'player';
    championEffect();
  }
  if (playerLife === 0) {
    champion = 'computer';
    championEffect();
  }

  let computersMove = decide(Math.random() * 100);
  playerchoice.innerHTML = `<img src=${choiceImages[playerMove]}>`
  computerChoice.innerHTML = `<img src=${choiceImages[computersMove]}>`;
  console.log(playerMove, computersMove);
  if (playerMove == computersMove) {
    roundWinner = 'tie';
  }
  else if (playerMove == 0) {
    if (computersMove == 1) {
      roundWinner = 'computer';
      playerLife--;

    }
    else {
      roundWinner = 'player';
      computerLife--;
    }
  }
  else if (playerMove == 1) {
    if (computersMove == 2) {
      roundWinner = 'computer';
      playerLife--;

    }
    else {
      roundWinner = 'player';
      computerLife--;
    }
  }
  else {
    if (computersMove == 0) {
      roundWinner = 'computer';
      playerLife--;

    }
    else {
      roundWinner = 'player';
      computerLife--;
    }
  }
  console.log(roundWinner, playerLife)
  winnerImageShower(roundWinner);
  lifeimagefunction();
}

userChoices.forEach((choice) => {
  const option = document.createElement('div');
  option.id = choice;
  const img = document.createElement('img');
  img.src = choiceImages[choice];
  option.appendChild(img);
  options.appendChild(option);
  img.onclick = () => {
    findWinner(option.id);
    ;
  }
}
)

restart.onclick = reset;