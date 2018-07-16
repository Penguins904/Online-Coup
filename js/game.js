window.addEventListener("message", function(event){
  //
  console.log("recived");
  if (event.origin.indexOf("Penguins904.github.io")){
    console.log("passed if");
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
    player1.coins = player1.cards[0].Tax(player1.coins);
    document.getElementById("coinsLbl").innerHTML = "Coins" + player1.coins.toString();
  }
  });

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
