var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
var level = 0;
var gameOn = false;

//Game activate when key pressed
$(document).keypress(function(){
  gameOn = true;
  if(gameOn){
    nextSequence();
  }
});

//When the button is clicked, it saves the color user chose and save it in the array
//Plays the sound of the button
//animates the button
$(".btn").click(function(){

  if (gameOn){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
} else{
  $("#level-title").text("Press Any Button To Start Game");
}
});


//Creates an array of game random pattern
//Flashes and play sound of the new generated color
function nextSequence(){
  level++;
  $("#level-title").text("Level "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColours = buttonColours[randomNumber];
  gamePattern.push(randomChosenColours);

  $("#"+ randomChosenColours).fadeOut(100).fadeIn(100);
  playSound(randomChosenColours);
}

function checkAnswer(currentLevel){

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log(currentLevel);
    console.log("success");
    console.log(userClickedPattern);
    console.log(gamePattern);
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }

  } else{
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over." + " Final Score: " + (level-1));
    startOver();

  }

}

//Play the audio of button
function playSound(name){
  var audioElement = new Audio("sounds/" + name + ".mp3");
  audioElement.play();
}

//Animate the button
function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  },100);
}

// Restart the game
function startOver(){
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  gameOn = false;
}
