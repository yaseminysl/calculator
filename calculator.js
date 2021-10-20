let number1Str = "";
let operatorStr = "";
let number2Str = "";
let result = 0;

function updateNumber(number) {
  number = number.toString();
  if (operatorStr != "") {
    number2Str = number2Str + number;
    updateScreen(number2Str);
  } else {
    number1Str = number1Str + number;
    updateScreen(number1Str);
  }
}

function updateScreen(number) {
  number = number.toString();
  number = number.replace(".", ",");
  if (number[0] == "0") {
    number = number.substring(1);
  }
  document.getElementById("calScreen").innerHTML = number;
}

function checkCallEq() {
  if (operatorStr != "") {
    clickEqu();
  }
}

function clickDel() {
  number1Str = 0;
  operatorStr = "";
  number2Str = 0;
  result = 0;
  updateScreen(0);
}

function minusPlus() {
  if (operatorStr === "") {
    number1Str = parseFloat(number1Str) * -1;
    updateScreen(number1Str);
  } else {
    number2Str = parseFloat(number2Str) * -1;
    updateScreen(number2Str);
  }
}

function percent() {
  number1Str = parseFloat(number1Str) / 100;
  number2Str = parseFloat(number2Str) / 100;
}

function clickDiv() {
  checkCallEq();
  operatorStr = "/";
}

function clickPlus() {
  checkCallEq();
  operatorStr = "+";
}

function clickMin() {
  checkCallEq();
  operatorStr = "-";
}

function clickMult() {
  checkCallEq();
  operatorStr = "*";
}

function clickEqu() {
  let number1 = parseFloat(number1Str);
  let number2 = parseFloat(number2Str);

  if (operatorStr == "+") {
    result = number1 + number2;
  } else if (operatorStr == "-") {
    result = number1 - number2;
  } else if (operatorStr == "*") {
    result = number1 * number2;
  } else if (operatorStr == "/") {
    result = number1 / number2;
  }
  number1Str = result.toString();
  number2Str = "0";
  updateScreen(result);
}
