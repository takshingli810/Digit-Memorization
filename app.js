//Project 1 Javascript
//This will be a memory game where digits/numbers will pop up on the screen and
//players would have to remember it to gain points.
//This game will be 15 rounds per player and random numbers will flash from 1-5 digits.
//players would have 2-3 seconds to memorize the number shown.
//players will submit answer after all the number is shown
//scripts will be used to create animations.

//Global Variable
var numberString,
		nextNum,
		turns = 1,
		scores = 0,
		digitCount = 1;

$(function(){
	console.log("ready")

	//calling function
	startGame(); //everything starts from here.

	// Clicking Start
	function startGame() {
		$("#startButton").click(function(){
			numberString = '';
			$("#player").html("Player : " + scores); //displays player score
			$("#classLi").html("Turns : " + turns); //displays turns
			showNumber();
		});
	}

	// appends number to the page
	function showNumber() {
		console.log("showNumber called");
		// create a timed loop that will present a series of numbers present a number
		setTimeout(function(){
			nextNum = Math.floor(Math.random() * 10);
			numberString += nextNum;
			console.log("number string is", numberString)
			$("#numbers").html(numberString);

			if(numberString.length < digitCount){
				showNumber();
			}
			else
			{
				setTimeout(function(){
					$("#numbers").html("Please enter the all the digit(s)");
				}, 500);
			}
		}, 500);
	}

	$("#enterForm").on("submit", function(e){
		e.preventDefault();
		console.log($("#userAnswer").val()); //error checking
		if ($("#userAnswer").val() === "" || $("#userAnswer").val() === null || $("#userAnswer").val() === undefined || $("#userAnswer").val() === NaN) {
			alert('enter value');
		}
		else
		{
			var userAnswer = $(e.target).find("#userAnswer").val();
			compareAnswer(userAnswer);
			clearForm();
		}
	});

		// clear form
	function clearForm() {
		$("#userAnswer").val('');
		$("#numbers").html('Please press Start again!');
	}

	function compareAnswer(userAnswer){
		if (userAnswer == numberString) {
			$("#rightWrongLi").append("<h1>Correct Answer</h1>");
			scores = scores + 1;
			digitCount += 1;
			console.log(scores)
				setTimeout(function (){
					$("#rightWrongLi").html("");
				},1000);
		}
		else if (userAnswer != numberString){
			$("#rightWrongLi").append("<h1>Wrong Answer</h1>");
			scores = scores - 1;
			digitCount -= 1;
			setTimeout(function (){
					$("#rightWrongLi").html("");
				},1000);
		}
		incrementTurns();
	 }

	 // increment turns
	 function incrementTurns() {
		console.log("compare answer called");
		turns += 1;
	 }
	});
