const options = document.querySelector(".options");
const winner = document.querySelector(".winnername");
const winnerimage = document.querySelector(".winnerimage");
const slot = document.querySelector(".slot");
const lifeDetails = document.querySelector(".lifeDetails");
const lifenos = document.querySelector(".lifenos");
const computer = document.querySelector(".computer");
const winnername=document.querySelector('.winnername');


let life = 3;
let userScore = 0;
let computerScore = 0;
let roundWinner='';
let champion='';
let userChoices=[0,1,2];//o for stone 1 for paper 2 for scissors
winnerimage.innerHTML=`<img src='./images/vs.webp'>`
const choiceImages = [
  './images/Dirt.webp',
  './images/papericon.webp',
  './images/scissorsicon.png'
];
const winnerImages =[
  './images/computer.webp',
  './images/player.webp',
  './images/tie.webp'
]
function decide(i){
  if(i<=30){
    return 0;
  }
  else if(i<=60){
    return 1;
  }
  else{
    return 2;
  }
}
function winnerImageShower(roundWinner){
  if (roundWinner=='computer'){
    winnerimage.innerHTML=`<img src=${winnerImages[0]}>`;
    winnername.innerHTML=`In this round ${roundWinner} won`;
  
  }
  else if(roundWinner==='player'){
    winnerimage.innerHTML=`<img src=${winnerImages[1]}>`;
    winnername.innerHTML=`In this round ${roundWinner} won`;
  }
  else{
  
  winnerimage.innerHTML=`<img src=${winnerImages[2]}>`;
  winnername.innerHTML=`oops.... It is a tie`;
  }
}

const lifeimagefunction=()=>{
let lifeimages=``;
for(let i=0;i<life;i++){
  lifeimages+=`<img src='./images/heart.png'>`;
}
lifenos.innerHTML=lifeimages
}
lifeimagefunction();
const slotfunction=()=>{
    let random=decide(Math.random()*100);
    slot.innerHTML=`<img src=${choiceImages[random]}>`;
  }
const iterval=setInterval(slotfunction,1000);
const findWinner=(playerMove)=>{
  
  let computersMove=decide(Math.random()*100);

  const computerChoice=document.querySelector('.computerChoice');
computerChoice.innerHTML=`<img src=${choiceImages[computersMove]}>`;
  console.log(playerMove,computersMove);
  if (playerMove==computersMove)
  {
    roundWinner='tie';
  }
  else if(playerMove==0){
    if(computersMove==1){
      roundWinner='computer';

    }
    else{
      roundWinner='player';
    }
  }
  else if(playerMove==1){
    if(computersMove==2){
      roundWinner='computer';

    }
    else{
      roundWinner='player';
    }
  }
  else{
    if(computersMove==0){
      roundWinner='computer';

    }
    else{
      roundWinner='player';
    }
  }
console.log(roundWinner)
winnerImageShower(roundWinner);
}

userChoices.forEach((choice)=>{
  const option=document.createElement('div');
  option.id=choice;
  const img=document.createElement('img');
  img.src=choiceImages[choice];
  option.appendChild(img);
  options.appendChild(option);
  img.onclick=()=>{findWinner(option.id);
  const playerchoice=document.querySelector('.playerchoice');
  playerchoice.innerHTML=`<img src=${choiceImages[option.id]}>`
  }
}
)
