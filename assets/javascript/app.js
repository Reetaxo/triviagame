var count = 5;
var gameTimer;


function startTimer() {
gameTimer = setInterval(function(){
count--;  
console.log(count);


},100000);

}

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
  var question10 = document.quiz.question10.value;

	if (question1 == "John Jay Preston") {
		correct++;
}
	if (question2 == "Heaven on Fifth") {
		correct++;
}	
	if (question3 == "A Pooch") {
		correct++;
  }
  if (question4 == "Her divorce attorney") {
		correct++;
}
	if (question5 == "Blair Underwood") {
		correct++;
}	
	if (question6 == "Samantha Jones") {
		correct++;
  }
  if (question7 == "2") {
		correct++;
}
	if (question8 == "I like my money right where I can see it... hanging in my closet!") {
		correct++;
}	
	if (question9 == "Atlantic City") {
		correct++;
  }
  if (question10 == "Samantha Jones") {
		correct++;
	}
}

function endGame() {
setTimeout(function(){
clearInterval(gameTimer);
count = 5;
console.log("Game finished");

},5000);
} 


$("document").ready(function() {
  $("#start").on("click", function() {
    // console.log("test");
    $("#buttons").hide();
    $(".questions").show();
    $("#answers").show();
    // $("#end").show();
    startTimer();
    endGame();
  });
})
