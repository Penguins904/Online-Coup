Card = function(type){ //add paramiter img
    this.type = type
    switch (this.type) {
      case "Duke":
        //Duke
      case "Captain":
        //Captian
      case "Contessa":
        //Contessa
      case "Contessa":
        //Assassin
      case "Inquisitor":
        //Inquisitor
      case "Ambassador":
        //Ambassador
    }
    //Actions
    function Income(coins) {
      coins++;
      return coins
    }
    function FA(coins, Duke) {
      coins += 2;
      return coins
    }
    function Coup(coins, player){
      if (coins >= 7){
        coins -= 7;
        //flip card
      }
    }
    function Tax(coins){
      coins += 3;
      return coins
    }
    function kill(coins, player, Contessa){
      coins -= 3;
      //flip card
    }
    function Draw(){
      //Draw
    }
    function Steal(coins, player){
      coins += 2;
      //- 2 coins
      return coins //return array with coins and player.coins
    }
}
