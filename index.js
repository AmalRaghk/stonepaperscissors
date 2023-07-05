let totallife=3;
let computerChoices=['stone','paper','scissors'];
let computerchooser=Math.random();
let userChoice=[];
let winner='player';

function printLife(){
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

function slot() {
  const slotElement = document.querySelector('.slot');
  let i = 0;
  intervalId = setInterval(() => {
    slotElement.innerHTML = `<img src="${computerChoiceImages[i]}">`;
    i = (i + 1) % computerChoiceImages.length;
  }, 1000);
}

function stop() {
  clearInterval(intervalId);
  stopped = true;
}

document.querySelector('.stop-button').addEventListener('click', stop);

printLife();
slot();
comments();



