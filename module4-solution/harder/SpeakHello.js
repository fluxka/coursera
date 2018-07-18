

(function (window) {


var speakWord = "Hello";

var helloSpeaker = {};
helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
  var query = document.querySelector("#names").innerHTML;
  document.querySelector("#names").innerHTML = query + speakWord + " " + name + "</br>";
}

window.helloSpeaker = helloSpeaker;


})(window);
