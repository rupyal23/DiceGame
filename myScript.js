
let numSd;
//DiceGame
function rollDice(){
	roll = Math.ceil(Math.random()*numSd);
	return roll; 
}


//Select Dice
function diceSelect(){
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
}

function p1(){
	let p1Roll = rollDice(numSd);
	console.log(p1Roll);
}

function p2(){
	let p2Roll = rollDice(numSd);
	console.log(p2Roll);
}







//function dispPts(){
//	let ptP1='';
//	ptP1 += rollDice();
	//ptP1 += 60;
//	console.log(ptP1);
//}



	


