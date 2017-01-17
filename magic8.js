
function answer() {

  document.getElementById("question").value = " ";

  var random = Math.floor(Math.random() * 5);

  if (random === 0) {
    end="Yes";
  }
  if (random === 1) {
    end="No";
  }
  if (random === 2){
    end="Ask Google...?";
  }
  if (random === 3) {
    end="Third time's a charm.";
  }
  if (random === 4) {
    end="Get a job.";
  }

  document.getElementById("answer_field").innerHTML = end;
}
