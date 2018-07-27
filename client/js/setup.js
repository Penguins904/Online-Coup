function start() {
  var name = parseInt(document.getElementById("name").value);
  var Iframe = document.getElementById("GameArea");
  Iframe.contentWindow.postMessage(name, "http://localhost:5000" || "https://online-coup.herokuapp.com");
  Iframe.style.display = "block";
}
