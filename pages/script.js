const diceImg=document.getElementsByClassName("dice-image");
function rollDice() {
    const min = 1;
    const max = 6;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if(randomNumber==1){
        diceImg.src="./images/dice.png";
    }
    else if(randomNumber==2){
        diceImg.src="./images/dice (1).png";
    }
    else if(randomNumber==3){
        diceImg.src="./images/dice (2).png";
    }
    else if(randomNumber==4){
        diceImg.src="./images/dice (3).png";
    }
    else if(randomNumber==5){
        diceImg.src="./images/dice (4).png";
    }
    else if(randomNumber==6){
        diceImg.src="./images/dice (5).png";
    }
}