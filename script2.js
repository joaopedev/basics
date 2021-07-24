function calculate() {
  var n1 = document.getElementById("ip1");
  var op = document.getElementById("scroll");
  var n2 = document.getElementById("ip2");

  if (n1.value == ``) {
    alert(`Number 1 was missing`);
    n1.style.border = `2px solid red`;
  }
  if (n2.value == ``) {
    alert(`Number 2 was missing`);
    n2.style.border = `2px solid red`;
  }
  if (op.value == ``) {
    alert(`Said the operations`);
    op.style.border = `2px solid red`;
  }

  if (op.value == "+") {
    document.getElementById("result").value = +n1.value + +n2.value;
  }
  if (op.value == "-") {
    document.getElementById("result").value = +n1.value - +n2.value;
  }
  if (op.value == "*") {
    document.getElementById("result").value = +n1.value * +n2.value;
  }
  if (op.value == "/") {
    document.getElementById("result").value = +n1.value / +n2.value;
  }
} 
