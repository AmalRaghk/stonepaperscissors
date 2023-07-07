let totallife=3;
let computerChoices=['stone','paper','scissors'];
let computerchooser=Math.random();
let userChoice=[];
let winner='player';
const lifeNos=document.querySelector('.lifenos');
const decide=(i)=>{
  if (i<=3){
    i=0;
  }
  else if(i<=6){
    i=1;
  }
  else{
    i=2;
  }
  return i
  
}

const printLife=()=>{
  lifeNos.innerHTML = '';
  for (let i = 0; i < totallife; i++) {
    const lifeImage = document.createElement('img');
    lifeImage.setAttribute('class', 'lifeImage');
    lifeImage.src = './images/heart.png';
    lifeNos.appendChild(lifeImage);
  }
}

const comments=()=>{
    const lifeDetails=document.querySelector('.lifeDetails');
    lifeDetails.innerHTML='last attack '+winner+' won ';
    
}
let intervalId;
let stopped = false;

const computerChoiceImages = [
  './images/Dirt.webp',
  './images/papericon.webp',
  './images/scissorsicon.png'
];
let choice='';
function slot() {
  const slotElement = document.querySelector('.slot');
  let i=Math.random()*10;
  i=decide(i);
  const img=document.createElement('img');
  slotElement.appendChild(img);
  intervalId = setInterval(() => {
    const img=document.createElement('img');
    img.src=computerChoiceImages[i];
    img.setAttribute('id',i);
    slotElement.replaceChild(img, slotElement.firstChild);
    i = (i + 1) % computerChoiceImages.length;
  }, 1000);
}

function stop() {
  clearInterval(intervalId);
  stopped = true;
}

//document.querySelector('.stop-button').addEventListener('click', stop);
const winners = (id) => {
  const slotElement = document.querySelector('.slot');
  const computersmove = decide(Math.random())
  const img=document.createElement('img');
  img.src=computerChoiceImages[computersmove];
  slotElement.replaceChild(img, slotElement.firstChild);
  console.log(computersmove,id);

  if (id == computersmove) {
    winner = 'Tie';
  } else if (
    (id == 0 && computersmove == 2) ||
    (id == 1 && computersmove == 0) ||
    (id == 2 && computersmove == 1)
  ) {
    winner = 'player';
    totallife--;
  } else {
    winner = 'computer';
    totallife--;
  }
  comments();
  printLife();
};

const usersChoice=()=>{
  const options=document.querySelector('.options');
  for(let i=0;i<3;i++){
    const img=document.createElement('img');
    img.setAttribute('id',i);
    const choice=document.createElement('div');
    choice.setAttribute('class','choice'+i);
    img.src=computerChoiceImages[i];
    choice.appendChild(img)
    options.appendChild(choice)
    img.onclick=()=>{
      stop();
      winners(img.id)
    }
  }

}
printLife();
slot();
comments();
usersChoice();



