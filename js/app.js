var res = document.getElementById("result"); // storing it in a variable because accessing DOM repeatedly is memory intensive task

function update(x) {
    res.innerHTML += x;
}

function result() {
  res.innerHTML = eval(res.innerHTML); // eval() function in js does all the arithmetic operations here
}

function reset() {
  res.innerHTML = ""; //clears the screen
}
