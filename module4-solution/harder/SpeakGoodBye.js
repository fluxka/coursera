
(function (window) {


var speakWord = "Good Bye";

var byeSpeaker = {};

byeSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
  var query = document.querySelector("#names").innerHTML;
  document.querySelector("#names").innerHTML = query + speakWord + " " + name + "</br>"; 
}

window.byeSpeaker = byeSpeaker;

})(window);

