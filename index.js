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
const stopButton = document.querySelector('.stop-button');
const slotList = document.querySelector('.slot__list');

let interval;

function startSlot() {
  interval = setInterval(() => {
    const top = parseInt(slotList.style.top || '0', 10);
    
    slotList.style.top = `${top - 100}px`;
    
    if (top <= -200) {
      slotList.style.top = '0px';
    }
  }, 100);
}

stopButton.addEventListener('click', () => {
  clearInterval(interval);
});

startSlot();



printLife();
comments();



