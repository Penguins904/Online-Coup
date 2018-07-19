function start() {
  var name = parseInt(document.getElementById("name").value);
  var Iframe = document.getElementById("GameArea");
  Iframe.contentWindow.postMessage(apc, "http://localhost");
  Iframe.style.display = "Block";
}
