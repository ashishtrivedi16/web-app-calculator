var res = document.getElementById("result");

function update(x) {
    res.innerHTML += x;
}

function result() {
  res.innerHTML = eval(res.innerHTML);
}

function reset() {
  res.innerHTML = "";
}
