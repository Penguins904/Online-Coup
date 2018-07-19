class Coup {
  constructor(p1, p2) {
    this.players = [p1, p2];
    sendToAll("ready", "log")
  }

  sendToAll(event, message) {
    this.players.forEach(function(player){
      player.emit(event, message)
    });
  }






}
