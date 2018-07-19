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
    this.Income = function(coins) {
      coins++;
      return coins
    }
    this.Foreign_Aid = function(coins, Duke) {
      coins += 2;
      return coins
    }
    this.Coup = function(coins, player){
      if (coins >= 7){
        coins -= 7;
        //flip card
      }
    }
    this.Tax = function(coins){
      coins += 3;
      return coins
    }
    this.Assassinate = function(coins, player, Contessa){
      coins -= 3;
      //flip card
    }
    this.Draw = function(){
      //Draw
    }
    this.Steal = function(coins, coins2){
      coins += 2;
      coins2 -= 2;
      return [coins, coins2]
    }
}
