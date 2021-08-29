
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let player={
	playerName:"Per",
	playerChips:145,
	sayHello: function(){
		console.log("Heisann!")
	}

}

let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.playerName+": $"+player.playerChips
function startGame(){
	isAlive=true
	let firstCard=getRandomCard()
	let secondcard=getRandomCard()
	cards=[firstCard,secondcard]
	sum=firstCard+secondcard
	renderGame()
}


function renderGame(){
	sumEl.textContent="Sum :"+sum
	cardsEl.textContent="Cards:"

	for(let i=0;i<cards.length;i++){
		cardsEl.textContent+=" "+cards[i]
	}

	if(sum<21){
		message="Do you want to draw a new card?"
	}else if(sum===21){
		message="You've got Blackjack!"
		hasBlackJack=true
	}else {
		message="You are out of the game"
		isAlive=false
	}
	messageEl.textContent=message 
}
function newCard(){
	if(hasBlackJack===false && isAlive===true){
		let card=getRandomCard()
		messageEl.textContent="You've drawn new card from the deck"
		sum+=card
		cards.push(card)
		renderGame()
	}
}

function getRandomCard(){
	let rand=Math.floor(Math.random()*13)+1
	if(rand>10){
		return 10
	} else if(rand===1){
		return 11
	}
	return rand
}

