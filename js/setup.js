function start() {
  var apc = parseInt(document.getElementById("apc").value);
  var Iframe = document.getElementById("GameArea");
  Iframe.contentWindow.postMessage(apc);
}
