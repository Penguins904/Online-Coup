var socket = io();
var start = false;
var player1;
window.addEventListener("message", function(event){
  if (event.origin.indexOf("localhost")){
    var name = event.data
    socket.on("ready", function (string) {
      console.log("done");
    })
  }
  });
function Action(id){
  var action = document.getElementById(id).innerHTML;
  if (start) {
    switch (action) {
      case "Income":
        player1.coins = player1.cards[0].Income(player1.coins);
        updateCoinLbl();
      case "Foreign Aid":
        player1.coins = player1.cards[0].Foreign_Aid(player1.coins);
        updateCoinLbl();
      case "Coup":
        console.log("func not done yet");
      case "Tax":
        player1.coins = player.cards[0].Tax(player1.coins);
        updateCoinLbl();
      case "Steal":
      console.log("func not done yet");
      case "Draw":
      console.log("func not done yet");
      case "Assassinate":
      console.log("func not done yet");
    }
  }
}
function updateCoinLbl() {
  document.getElementById("coinsLbl").innerHTML = "Coins: " + player1.coins.toString();
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
