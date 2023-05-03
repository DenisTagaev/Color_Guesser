var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++){
     modeButtons[i].addEventListener("click", function(){
          modeButtons[0].classList.remove("selected");
          modeButtons[1].classList.remove("selected");
          this.classList.add("selected");
          if(this.textContent ==="Easy"){
               numSquares = 3;
          }
          else{
               numSquares = 6;
          }
          resetFunc();
          //figure out how many squares
          //pick new colors
          //pick a newpickedColor
          //update page
     })
}
reset.addEventListener("click", function () {
   resetFunc();
})

for( var i = 0; i < squares.length; i++){
     //add initial colors to squares
     squares[i].style.backgroundColor = colors[i];
     //add click listeners to squares
     squares[i].addEventListener("click", function(){
          var clickedColor =this.style.backgroundColor;
          if(clickedColor === pickedColor){
               messageDisplay.textContent="Correct!";
               reset.textContent = "Play Again?";
               changeColors(clickedColor);
               h1.style.background = clickedColor;
          }
          else{
               this.style.backgroundColor ="#232323";
               messageDisplay.textContent = "Try Again";
          }
     })
}

function resetFunc(){
     colors = generateRandomColors(numSquares);
     //pick a random color from array
     pickedColor = pickColor();
     //change colors of array
     colorDisplay.textContent = pickedColor;
     //change color for squares
     for (var i = 0; i < squares.length; i++) {
          if(colors[i]){
               squares[i].style.display = "block";
               squares[i].style.backgroundColor = colors[i];
          }else{
          squares[i].style.display = "none";}
     
     }
     h1.style.background = "steelblue";
     reset.textContent = "New Colors";
     messageDisplay.textContent = "";
}
function changeColors(color) {
     //loop through all squares
     for (var i = 0; i < squares.length; i++) {
     squares[i].style.backgroundColor = color;
     }
}

function pickColor() {
     var random = Math.floor(Math.random() * colors.length)
     return colors[random];
}

function generateRandomColors(num) {
     //make an array
     var arr = [];
     //add num of colors
     for (var i = 0; i < num; i++){
          //get random color and push into arr
          arr.push(randomColor())
     }
     //return the array
     return arr;
}

function randomColor() {
     //pick a "red"
     var r = Math.floor(Math.random() * 256);
     //pick a "green"
     var g = Math.floor(Math.random() * 256);
     //pick a "blue"
     var b = Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b + ")";
}