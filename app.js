//Project 1 Javascript
//This will be a memory game where digits/numbers will pop up on the screen and 
//players would have to remember it to gain points.
//This game will be 15 rounds per player and random numbers will flash from 1-5 digits. 
//players would have 2-3 seconds to memorize the number shown. 
//players will submit answer after all the number is shown
//scripts will be used to create animations.  
var numberString = ""; //empty number box
var turns = 1;
var scores = 0;
var nextNum;
var digitCount = 1;


$(function(){
	console.log("ready")



	$("#startButton").click(function(){ 
		numberString = '';
		$("#p1").html("Player : " + scores);
		$("#classLi").html("Turns : " + turns);
		showNumber();
		// enterAnswer();
	});

	$("#enterForm").on("submit", function(e){
		e.preventDefault();
		console.log($("#userAnswer").val());
		if ($("#userAnswer").val() === "" || $("#userAnswer").val() === null || $("#userAnswer").val() === undefined) {
			alert('enter value');
		}
		else {
			var userAnswer = $(e.target).find("#userAnswer").val();

			// if (userAnswer === Number) {
			// 				compareAnswer(userAnswer);

			// 			} else {
			// 				console.log("Oops, something went wrong)")
						}
			compareAnswer(userAnswer);
			// clear form
			$("#userAnswer").val('');
			$("#numbers").html('Please press Start!');
		
	});
});

// function playGame(){
// 	console.log("playGame called");
// 	setTimeout(showNumber, 2000);
// }
//click start to start game.
function showNumber() {
	console.log("showNumber called");
	// create a timed loop that will present a series of numbers
		//present a number
		setTimeout(function(){
			nextNum = Math.floor(Math.random() * 10);
			numberString += nextNum;
			console.log("number string is", numberString)
			$("#numbers").html(numberString);
			if(numberString.length < digitCount){
				showNumber();
			 }  else {
			 		// $("#numbers").html("Enter guess");
			 // }
				setTimeout(function(){
					$("#numbers").html("Please enter the all the digit(s)");
				}, 500);
			} 

		}, 500);

		}	
	
	// var wait = function(){ console.log("waiting"); };
	// console.log(numbers);
	

//

//p1 selector .append(score)


// write a function where input numbers will be compared with numbers string
// increment turns
function compareAnswer(userAnswer){
	console.log("compare answer called")
	turns += 1;
	digitCount +=1;
	if (userAnswer == numberString) {
		$("#rightWrongLi").append("<h1>Correct Answer</h1>");
		scores = scores + 10;
		console.log(scores)
			setTimeout(function (){
				$("#rightWrongLi").html("");
			},1000);
		}
		
	else if (userAnswer != numberString){
		$("#rightWrongLi").append("<h1>Wrong Answer</h1>");
		setTimeout(function (){
				$("#rightWrongLi").html("");
			},1000);
	}
}



	// $("#classLi").d


