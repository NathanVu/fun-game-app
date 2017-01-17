
var treasureLocation = Math.floor(Math.random() * 9);

var bombLocation = Math.floor(Math.random() * 9);

while (treasureLocation === bombLocation){
  var bombLocation = Math.floor(Math.random() * 9);
}

var counter = 8;

function checkPosition (a) {
  // alert(a);

    document.getElementById("counter").innerHTML = counter;

    counter = counter - 1;

    if (counter === (-2)) {
      alert("GOOD GAME");
    }

    if (counter < (-1)) {
      document.getElementById("counter").innerHTML = "GAME OVER";
    }

    document.getElementById(a).innerHTML = "&#x1F37A";

    if (treasureLocation === a) {
      document.getElementById(a).innerHTML = "&#x1F37B";
      document.getElementById("counter").innerHTML = "EVERYBODY DRINKS";
    }

    if (bombLocation === a) {
      document.getElementById(a).innerHTML = "&#x1F480";
      document.getElementById("counter").innerHTML = "DO A SHOT";

    }

}
