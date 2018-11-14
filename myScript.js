let numSd=4;
let numSdP1=4;
let numSdP2=4;
let p1Score=0;
let player1Total= 0; 
let player2Total= 0;
let numTurnP1=0;
let numTurnP2=0;


//DiceGame
function rollDice(numSd){
	let roll = Math.ceil(Math.random()*numSd);
	return roll; 
}

function p1(){
	numTurnP1++;
	let p1Roll = rollDice(numSdP1);
	player1Total += p1Roll;
	console.log("Player 1 Turn "+ numTurnP1+" Rolled:" +p1Roll +" Score:"+ player1Total);
	if (p1Roll==numSdP1){
			player1Total+=5;
			console.log("You scored MAXIMUM!!, and received 5 BP, your Total Score is: "+player1Total);
	}
}
function p2(){
	numTurnP2++;
	let p2Roll = rollDice(numSdP2);
	player2Total += p2Roll;
	console.log("Player 2 Turn "+ numTurnP2+" Rolled:" +p2Roll +" Score:"+ player2Total);
	if (p2Roll==numSdP2){
			player2Total+=5;
			console.log("You scored MAXIMUM!!, and received 5 BP, your Total Score is: "+player2Total);
	}
	let chk1 = lvlCh2();
	let chk2 = lvlCh3();
	let chk3 = lvlCh4();
	let chk4 = lvlCh5();
	let chk5 = lvlCh6();
	let chkWin = winGame();
}

//Player reaches level 2 - plays with 6-sided Dice
function lvlCh2(){
		if(numTurnP1==3&&numTurnP2==3&&player1Total>player2Total){
			numSdP1=lvlChg(numSdP1);
			console.log("Player 1 SCORED MORE!! jumped to NEXT LEVEL!!!");
			numSdP2 = lvlAuto(numSdP1, numSdP2);
		}
			else if(numTurnP1==3&&numTurnP2==3&&player2Total>player1Total){
			numSdP2=lvlChg(numSdP2);
			console.log("Player 2 SCORED MORE!! jumped to NEXT LEVEL!!!");
			numSdP1 = lvlAuto(numSdP1, numSdP2);
			}
			else if(numTurnP1==3&&numTurnP2==3){
			console.log("Both Players scored equal points.");
			}
		
}

//Player reached Level 3 - Plays with 8-Sided Dice	
function lvlCh3(){
		if(numTurnP1==6&&numTurnP2==6&&player1Total>player2Total){
			numSdP1=lvlChg(numSdP1);
			console.log("Player 1 SCORED MORE!! jumped to NEXT LEVEL!!!");
			numSdP2 = lvlAuto(numSdP1, numSdP2);
		}
		else if (numTurnP1==6&&numTurnP2==6&&player2Total>player1Total) {
				numSdP2=lvlChg(numSdP2);
				console.log("Player 2 SCORED MORE!! jumped to NEXT LEVEL!!!");
				numSdP1 = lvlAuto(numSdP1, numSdP2);
				
		}
		else if(numTurnP1==6&&numTurnP2==6){
				console.log("Both Players scored equal points.");
		}
				

}

//Player reached Level-4 - Plays with 10-Sided Dice
function lvlCh4(){
		if(numTurnP1==9&&numTurnP2==9&&player1Total>player2Total){
			numSdP1=lvlChg(numSdP1);
			console.log("Player 1 SCORED MORE!! jumped to NEXT LEVEL!!!");
			numSdP2 = lvlAuto(numSdP1, numSdP2);
				
		}
		else if (numTurnP1==9&&numTurnP2==9&&player2Total>player1Total) {
			numSdP2=lvlChg(numSdP2);
			console.log("Player 2 SCORED MORE!! jumped to NEXT LEVEL!!!");
			numSdP1 = lvlAuto(numSdP1, numSdP2);
		}
		else if(numTurnP1==9&&numTurnP2==9){
			console.log("Both Players scored equal points.");	
		}
		
}

//Player reaches Level 5 - Plays with 12-Sided Dice
function lvlCh5(){
		if(numTurnP1==12&&numTurnP2==12&&player1Total>player2Total){
			numSdP1=lvlChg(numSdP1);
			console.log("Player 1 SCORED MORE!! jumped to NEXT LEVEL!!!");
			numSdP2 = lvlAuto(numSdP1, numSdP2);
		}
		else if (numTurnP1==12&&numTurnP2==12&&player2Total>player1Total) {
			numSdP2=lvlChg(numSdP2);
			console.log("Player 2 SCORED MORE!! jumped to NEXT LEVEL!!!");
			numSdP1 = lvlAuto(numSdP1, numSdP2);
				
		}
		else if(numTurnP1==12&&numTurnP2==12){
			console.log("Both Players scored equal points.");
		}
		
}

//Player reaches Level 6 - Plays with 20-Sided Dice
function lvlCh6(){
		if(numTurnP1==15&&numTurnP2==15&&player1Total>player2Total){
			numSdP1=lvlChg(numSdP1);
			console.log("Player 1 SCORED MORE!! jumped to NEXT LEVEL!!!");
			numSdP2 = lvlAuto(numSdP1, numSdP2);
		}
		else if (numTurnP1==15&&numTurnP2==15&&player2Total>player1Total) {
			numSdP2=lvlChg(numSdP2);
			console.log("Player 2 SCORED MORE!! jumped to NEXT LEVEL!!!");
			numSdP1 = lvlAuto(numSdP1, numSdP2);
		}
		else if(numTurnP1==15&&numTurnP2==15){
			console.log("Both Players scored equal points.");
				
		}
		
}

function winGame() {
		if(player1Total>=100){
			console.log("PLAYER 1 WINS!!")
		}
		else if(player2Total>=100){
			console.log("PLAYER 2 WINS!!")
		}
}

function lvlChg(numSd){
	if(numSd<12){
		numSd=numSd+2;
	}
	else if(numSd=12){
		numSd=numSd+8;
	}
	return numSd;
}

function lvlAuto(numSdP1, numSdP2){
	if((numSdP1-numSdP2)>2){
		numSdP2=lvlChg(numSdP2);
		console.log("Player 2 Automatically jumped to NEXT LEVEL")
		return numSdP2;
	}
	else if((numSdP2-numSdP1)>2){
		numSdP1=lvlChg(numSdP1);
		console.log("Player 1 Automatically jumped to NEXT LEVEL")
		return numSdP1;
	}
	else{
		return numSdP1;
		return numSdP2;
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


	


