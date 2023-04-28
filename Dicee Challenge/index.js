var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random num 1-6
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //create variable to update image to random image
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); //update image based on random num

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  //random num 1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //create variable to update image to random image
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //update image based on random num

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🥳 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🥳";
}
else {
  document.querySelector("h1").innerHTML = "🥳 Tis' a Draw! 🥳";
}