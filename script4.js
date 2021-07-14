function limparbt() {
  var ip1 = document.getElementById("ip1");
  var ip2 = document.getElementById("barraderola");
  var barraderola = document.getElementById("ip2");
  var Result = document.getElementById("Result");

  ip1.value = ``;
  ip2.value = ``;
  barraderola.value = ``;
  Result.value = ``;
  ip1.style.border = null;
  ip2.style.border = null;
  barraderola.style.border = null;
  Result.style.border = null;
  document.body.style.backgroundColor = null;
}
