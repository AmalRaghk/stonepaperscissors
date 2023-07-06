let totallife=3;
let computerChoices=['stone','paper','scissors'];
let computerchooser=Math.random();
let userChoice=[];
let winner='player';

const printLife=()=>{
    const lifeNos=document.querySelector('.lifenos');
    for (let i=0;i<totallife;i++)
    {
        const lifeImage=document.createElement('img');
        lifeImage.setAttribute('class','lifeImage')
        lifeImage.src='./images/heart.png';
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
  if (i<=3){
    i=0;
  }
  else if(i<=6){
    i=1;
  }
  else{
    i=2;
  }
  intervalId = setInterval(() => {
    slotElement.innerHTML = `<img src="${computerChoiceImages[i]}">`;
    i = (i + 1) % computerChoiceImages.length;
  }, 1000);
}

function stop() {
  clearInterval(intervalId);
  stopped = true;
}

//document.querySelector('.stop-button').addEventListener('click', stop);
const winners=()=>{

  

}
printLife();
totallife=2;
slot();
comments();



