var res = document.getElementById("result");
var ans = 0;

function update(x) {
    res.innerHTML += x;
}

function result() {
  res.innerHTML = eval(res.innerHTML);
}

function reset() {
  res.innerHTML = "";
}
