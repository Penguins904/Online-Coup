window.addEventListener("message", function(event){
  if (event.origin.indexOf("Penguins904.github.io")){
    var apc = event.data
    var Deck = [];
    for (i = 0; i < apc * 5; i++){
      if (i < apc){
        Deck[i] = "Duke";
      } else if(i < 2 * apc){
        Deck[i] = "Captain";
      } else if( i < 3 * apc){
        Deck[i] = "Contessa";
      } else if (i < 4 * apc){
        Deck[i] = "Assassin"
      } else {
        Deck[i] = "Ambassador";
      }
    }
    Deck[Deck.length] = "Inquisitor";
    Deck = shuffle(Deck);
    var player1 = new player(Deck.slice(0, 2));
  }
  });
function Action(id){
  var action = document.getElementById(id).innerHTML;
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
