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
printLife();
comments();



