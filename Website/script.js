function clearsect() {
  document.getElementById("rngnumber").innerHTML = "";
}

function getNumber(){
  rng_max = document.getElementById("rng-max-id").value;
  alert("Value of min: " + rng_min + "\nValue of max: " + rng_max )
  document.getElementById("rng-input-form").reset();
}

function generate(minx, maxy) {
  document.getElementById("rngnumber").innerHTML = Math.floor(Math.random() * (maxy - minx + 1) + 1); // 0 * (5 - 1 + 1) + 1
}
