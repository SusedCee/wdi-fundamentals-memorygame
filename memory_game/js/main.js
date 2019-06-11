console.log("Up and running!");

window.confirm("WARNING! You're about to play a really cool game!")


var cardOne = ["queen"];
cardOne.push('queen');
console.log("User flipped queen");

var cardTwo = ["king"];
cardTwo.push('king');
console.log("User flipped king");

//var cardThree = []

//if (cardsInPlay < 2) [
//	cardsInPlay === 2]
var cardsInPlay = [];

if (cardsInPlay.length === 2) {

if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
    alert("Sorry, try again.")
} 
} 


let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"

},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}];



 function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");
      } else {
          alert("Sorry, try again");
        };
  };

function flipCard() {
    var cardId = this.getAttribute('data-id');
  	cardsInPlay.push(cards[cardId].rank);
 	this.setAttribute('src', cards[cardId].cardImage);
 	if (cardsInPlay.length === 2){
    checkForMatch();
 };
};

console.log(cardsInPlay);

function createBoard() {
  	const cardTable = document.getElementById('game-board');
  	for (var i = 0; i < cards.length; i++) {
  	var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    cardTable.appendChild(cardElement);
  }
};


//var score = 0;
//var resetButton = document.getElementById('reset');
//var statusMessage = document.getElementbyId('status-message');
//var flipCount = 0;

var createBoard = function() {

}


