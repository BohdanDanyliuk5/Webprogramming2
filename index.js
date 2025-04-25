// Випадкове число для гравця 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log("Player 1:", randomNumber1);

// Випадкове число для гравця 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log("Player 2:", randomNumber2);

// Шлях до зображень
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

// Заміна зображень у DOM
document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

// Оновлення заголовка <h1>
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
