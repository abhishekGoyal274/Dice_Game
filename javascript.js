//Random Dice number generator
var player1, player2;
player1 = Math.ceil(Math.random() * 5 + 1);
player2 = Math.ceil(Math.random() * 5 + 1);


// Player winner
if (player1 > player2) {
    document.getElementsByTagName("h1")[0].textContent = "ðââï¸Player 1ð¤¦ââï¸";
} else if (player2 > player1) {
    document.getElementsByTagName("h1")[0].textContent = "ð¤¦ââï¸Player 2ðââï¸";
} else {
    document.getElementsByTagName("h1")[0].textContent = "ð¯ Draw ð¯";
}

//Dice image Changer
document.getElementsByClassName("img1")[0].setAttribute("src", "dice" + player1 + ".png")
document.getElementsByClassName("img2")[0].setAttribute("src", "dice" + player2 + ".png")


// Random backgroundColor variables
var setBackgroundColor0 = Math.floor(Math.random() * 256);
var setBackgroundColor1 = Math.floor(Math.random() * 256);
var setBackgroundColor2 = Math.floor(Math.random() * 256);
var setBackgroundColor3 = Math.random();
document.body.style.backgroundColor = "rgba(" + setBackgroundColor0 + "," + setBackgroundColor1 + "," + setBackgroundColor2 + "," + setBackgroundColor3 + ")";