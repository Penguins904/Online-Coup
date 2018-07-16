function start(){ // apc = amount per card
  var apc = parseInt(document.getElementById("apc").value);
  var GameArea = document.getElementById("GameArea")
  console.log(GameArea);
  var Tax = document.getElementById("Tax");
  console.log(Tax);
  Deck = [];
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
