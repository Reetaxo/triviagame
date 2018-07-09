var count = 5;
var gameTimer;


function startTimer() {
gameTimer = setInterval(function(){
count--;  
console.log(count);


},100000);

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
    startTimer();
    endGame();
  });
});
