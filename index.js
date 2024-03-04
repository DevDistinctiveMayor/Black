
let cards= [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false
let message = "";
let reset = 0;

console.log(cards)


document.getElementById("sum_El")
document.getElementById("card_El")

let player = [
    playerName = "Mayor",
    playerChips = 142 

]

document.getElementById("player-el").textContent = playerName + ": $"+ playerChips;
function playermoney(){
}


function getRandomcard(){
        let randomNumber = Math.floor(Math.random() * 13) +1
        if(randomNumber > 10){
            return 10
        }else if(randomNumber === 1){
            return 11
        
        }else {
            return randomNumber
   
    }
}


    function Startgame(){
        isAlive = true
        let firstCard = getRandomcard();
        let  secondCard = getRandomcard();
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard;
        rendergame()
    }

    function rendergame(){
        card_El.textContent = "Cards :";
        for(i = 0; i < cards.length; i++){
            card_El.textContent += cards[i] + ":"
        }
    
        sum_El.textContent = "Sum:" + sum;
      
 
    if(sum < 21){
        message = ("Do your want to draw a new card?😊")
        isAlive = true;
    }else if(sum === 21){
        message = ("You've got Blackjack 😆")
        hasBlackJack = true;
        // return newCard
    }else{
        message = ("You are out of the game 😔")
        isAlive = false ;
    }
    document.getElementById("message").textContent = message;
}

    function newCard(){
        if(isAlive === true && hasBlackJack === false){
            let card = getRandomcard()
            sum += card;
            cards.push(card)
            rendergame();
        } 

    }
