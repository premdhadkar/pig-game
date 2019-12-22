/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls 2 dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it"s the next player"s turn
- The player can choose to "Hold", which means that his ROUND score gets added to his GLOBAL score. After that, it"s the next player"s turn
- The first player to reach FINAL SCORE points on GLOBAL score wins the game

*/

var scores=[], activePlayer, roundScore,gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click", function(){
	if(gamePlaying){

		var dice2 = Math.floor(Math.random()*6) + 1;
		var dice1 = Math.floor(Math.random()*6) + 1;

		document.getElementById('dice-2').style.display = 'block';
		document.getElementById('dice-1').style.display = 'block';

		document.getElementById('dice-1').src = "dice-"+dice1+".png";
		document.getElementById('dice-2').src = "dice-"+dice2+".png";

		if(dice1 !== 1 && dice2 !==1 ){

			roundScore += (dice1+dice2);
			document.querySelector("#current-"+activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}











		//code of challange 2
		/*if(dice === 6 && previous ===6){

			scores[activePlayer] = 0;
			document.querySelector("#score-"+activePlayer).textContent = '0';
			nextPlayer();
		}else if(dice !== 1){

			roundScore += dice;
	
			previous = dice;
	
			document.querySelector("#current-"+activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}*/
	}
});

document.querySelector(".btn-hold").addEventListener("click",function(){

	if(gamePlaying){

		scores[activePlayer] += roundScore;

		document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];

		var winningScore = document.querySelector(".final-score").value;

		if(winningScore);else
			winningScore = 100;

		if(scores[activePlayer] >=winningScore){

			document.querySelector("#name-"+activePlayer).textContent = "winner!";
			
			document.querySelector("#dice-1").style.display = "none";
			
			document.querySelector("#dice-2").style.display = "none";
			
			document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
			
			document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
			
			gamePlaying = false;
		
		}else
		
			nextPlayer();
	}
});



function nextPlayer() {

	activePlayer === 0 ? activePlayer =  1 : activePlayer =  0 ;
	roundScore = 0;
	document.getElementById("current-0").textContent = 0;
	document.getElementById("current-1").textContent = 0;
	
	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");
	
	document.querySelector("#dice-1").style.display = "none";		
	document.querySelector("#dice-2").style.display = "none";
}


document.querySelector(".btn-new").addEventListener("click",init);


function init() {
	
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	var pa = document.querySelector(".player-1-panel").classList;
	var pane0 = document.querySelector(".player-0-panel").classList;


	document.querySelector("#dice-1").style.display = "none";		
	document.querySelector("#dice-2").style.display = "none";
			
	
	document.getElementById("score-1").textContent = 0;
	document.getElementById("score-0").textContent = 0;
	document.getElementById("current-1").textContent = 0;
	document.getElementById("current-0").textContent = 0;

	document.getElementById("name-0").textContent = "Player 1";
	document.getElementById("name-1").textContent = "Player 2";

	pa.remove("winner");
	pa.remove("active");
	pane0.remove("active");
	pane0.remove("winner");
	pane0.add("active");
 
}
