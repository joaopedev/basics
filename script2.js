function calculate() {
  let n1 = document.getElementById("ip1");
  let op = document.getElementById("scroll");
  let n2 = document.getElementById("ip2");

  if (n1.value == ``) {
    alert(`Number 1 was missing`);
    return n1.style.border = `2px solid red`;
  }
  if (n2.value == ``) {
    alert(`Number 2 was missing`);
    return  n2.style.border = `2px solid red`;
  }
  if (op.value == ``) {
    alert(`Said the operations`);
    return  op.style.border = `2px solid red`;
  }

  if (op.value == "+") {
    return document.getElementById("result").value = ` ${+n1.value + +n2.value}`;
  }
  if (op.value == "-") {
    return  document.getElementById("result").value = ` ${+n1.value - +n2.value}`;
  }
  if (op.value == "*") {
    return  document.getElementById("result").value = ` ${+n1.value * +n2.value}`;
  }
  if (op.value == "/") {
    return document.getElementById("result").value = ` ${+n1.value / +n2.value}`;
  }
}
