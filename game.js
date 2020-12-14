var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

audioRed = new Audio('sounds/red.mp3');
var audioBlue = new Audio('sounds/blue.mp3');
var audioGreen = new Audio('sounds/green.mp3');
var audioYellow = new Audio('sounds/yellow.mp3');

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColours = buttonColours[randomNumber];
  gamePattern.push(randomChosenColours);
}
