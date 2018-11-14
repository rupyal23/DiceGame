let numSd=4;
let numSdP1=4;
let numSdP2=4;
let p1Score=0;
let player1Total= 0; 
let player2Total= 0;
let numTurnP1=0;
let numTurnP2=0;
//let lvl=[4,6,8,10,12,20];
//DiceGame
function rollDice(numSd){
	let roll = Math.ceil(Math.random()*numSd);
	return roll; 
}

function p1(){
	numTurnP1++;
	console.log("Player 1 Turn "+ numTurnP1);
	let p1Roll = rollDice(numSdP1);
	console.log("Rolled: "+ p1Roll);
	player1Total += p1Roll;
	console.log("Score: "+player1Total);
	if (p1Roll==numSdP1){
			player1Total+=5;
			console.log("You scored maximum, and received 5 BP, your Total Score is: "+player1Total);
	}
}
function p2(){
	numTurnP2++;
	console.log("Player 2 Turn "+ numTurnP2);
	let p2Roll = rollDice(numSdP2);
	console.log("Rolled: "+p2Roll);
	player2Total += p2Roll;
	console.log("Score: "+player2Total);
	if (p2Roll==numSdP2){
			player2Total+=5;
			console.log("You scored maximum, and received 5 BP, your Total Score is: "+player2Total);
	}
	let bonus1 = bonusTier1();
	let bonus2 = bonusTier2();
}

function bonusTier1(){
		while(numTurnP1==3&&numTurnP2==3){
				if (player1Total>player2Total){
				numSdP1=6;
				console.log("Player 1 jumped to Level 2 for scoring more than Player 2 in 3 turns and will play with 6-Sided Dice");
				break;
			}
			else if (player2Total>player1Total) {
				numSdP2=6;
				console.log("Player 2 jumped to Level 2 for scoring more than Player 1 in 3 turns and will play with 6-Sided Dice");
				break;
			}
			else{
				console.log("Both Players scored equal points.");
				break;
			}
		}
}
	
function bonusTier2(){
		while(numTurnP1==6&&numTurnP2==6){
				if (player1Total>player2Total){
				numSdP1=8;
				console.log("Player 1 jumped to Level 3 for scoring more than Player 2 in 6 turns and will play with 8-Sided Dice");
				break;
			}
			else if (player2Total>player1Total) {
				numSdP2=8;
				console.log("Player 2 jumped to Level 3 for scoring more than Player 1 in 6 turns and will play with 8-Sided Dice");
				break;
			}
			else{
				console.log("Both Players scored equal points.");
				break;
			}
		}
}


/*function diceSelect(){
	let userInput=prompt("4-Sided(1), 6-Sided(2), 8-Sided(3), 10-Sided(4), 12-Sided(5), 20-Sided(6)");
	switch(userInput){
		case "1":
			numSd=4;
			console.log("4 Sided Dice Selected")
			break;
		case "2":
			numSd=6;
			console.log("6 Sided Dice Selected")
			break;
		case "3":
			numSd=8;
			console.log("8 Sided Dice Selected")
			break;
		case "4":
			numSd=10;
			console.log("10 Sided Dice Selected")
			break;
		case "5":
			numSd=12;
			console.log("12 Sided Dice Selected")
			break;
		case "6":
			numSd=20;
			console.log("20 Sided Dice Selected")
			break;
		default:
			break;
	}
}*/


/*	if(dice==1){
		let p1Roll = rollDice(numSd);
		console.log(p1Roll);
	}
	else if(dice==2){
		let p1Roll2Dices = [rollDice(numSd), rollDice(numSd)];
		console.log(p1Roll2Dices);
	}
	else if (dice==3){
		let p1Roll3Dices = [rollDice(numSd), rollDice(numSd), rollDice(numSd)];	
		console.log(p1Roll3Dices);
	}
	else if (dice==4){
		let p1Roll4Dices = [rollDice(numSd), rollDice(numSd), rollDice(numSd), rollDice(numSd)];
		console.log(p1Roll4Dices);
	}
	else if (dice==5){
		let p1Roll5Dices = [rollDice(numSd), rollDice(numSd), rollDice(numSd), rollDice(numSd), rollDice(numSd)];
		console.log(p1Roll5Dices);
	}
	else if (dice==6){
		let p1Roll6Dices = [rollDice(numSd), rollDice(numSd), rollDice(numSd), rollDice(numSd), rollDice(numSd), rollDice(numSd)];
		console.log(p1Roll6Dices);
	}*/

/*function noOfDice(){
	let dice=prompt("Enter the number of dices you want to play with (You can enter upto 6)");
	console.log("Number of Dices to play with is "+dice);
	p1(dice);
}*/







//function dispPts(){
//	let ptP1='';
//	ptP1 += rollDice();
	//ptP1 += 60;
//	console.log(ptP1);
//}



	


