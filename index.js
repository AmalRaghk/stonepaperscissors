const options = document.querySelector(".options");
const winner = document.querySelector(".winnername");
const winnerimage = document.querySelector(".winnerimage");
const slot = document.querySelector(".slot");
const lifeDetails = document.querySelector(".lifeDetails");
const lifenos = document.querySelector(".lifenos");
const computer = document.querySelector(".computer");


let life = 3;
let userScore = 0;
let computerScore = 0;
let userChoices=[0,1,2];//o for stone 1 for paper 2 for scissors
let stop=false;

const choiceImages = [
  './images/Dirt.webp',
  './images/papericon.webp',
  './images/scissorsicon.png'
];
const winnerImages =[]
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
const slotfunction=()=>{
  if(!stop){
    let random=decide(Math.random()*100);
    slot.innerHTML=`<img src=${choiceImages[random]}>`;
  }
}
const iterval=setInterval(slotfunction,1000);


userChoices.forEach((choice)=>{
  const option=document.createElement('div');
  option.id=choice;
  const img=document.createElement('img');
  img.src=choiceImages[choice];
  option.appendChild(img);
  options.appendChild(option);
}
)
