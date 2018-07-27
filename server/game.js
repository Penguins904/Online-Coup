class Coup {
  constructor(p1, p2) {
    this.players = [p1, p2];
    this.sendToAll("ready", "log")
  }

  sendToAll(event, message) {
    this.players.forEach(function(player){
      player.emit(event, message)
    });
  }
}

module.exports = Coup;
