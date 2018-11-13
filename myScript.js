//DiceGame
function rollDice(){
	let numSd;
	let roll = Math.random()*numSd;
	roll = Math.ceil(roll);
	return roll; 
}

//Sides of Dice
function diceSides(num){
	num=prompt("Enter the no. of sides of the dice you want to use:");
	let z=rollDice();
	console.log(z);
}


//function dispPts(){
//	let ptP1='';
//	ptP1 += rollDice();
	//ptP1 += 60;
//	console.log(ptP1);
//}



	


