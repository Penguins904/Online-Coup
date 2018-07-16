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
    player1.coins = player1.cards[0].Tax(player1.coins);
    document.getElementById("coinsLbl").innerHTML = "Coins: " + player1.coins.toString();
  }
  });
function Action(id){
  var action = document.getElementById(id).innerHTML;
  switch (action) {
    case "Income":

    case "Foreign Aid":

    case "Coup":

    case "Tax":

    case "Steal":

    case "Draw":

    case "Assassinate":
  }
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
