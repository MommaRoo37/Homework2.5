function add() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	let result = num1 + num2;
	document.getElementById("problem").innerHTML = num1 + " + " + num2;
	document.getElementById("result").innerHTML = "Result: " + result;
  }

  function subtract() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	let result = num1 - num2;
	document.getElementById("problem").innerHTML = num1 + " - " + num2;
	document.getElementById("result").innerHTML = "Result: " + result;
  }

  function multiply() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	let result = num1 * num2;
	document.getElementById("problem").innerHTML = num1 + " * " + num2;
	document.getElementById("result").innerHTML = "Result: " + result;
  }

  function divide() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	let result = num1 / num2;
	document.getElementById("problem").innerHTML = num1 + " / " + num2;
	document.getElementById("result").innerHTML = "Result: " + result;
  }

  function modulo() {
	let num1 = parseFloat(document.getElementById("num1").value);
	let num2 = parseFloat(document.getElementById("num2").value);
	let result = num1 % num2;
	document.getElementById("problem").innerHTML = num1 + " % " + num2;
	document.getElementById("result").innerHTML = "Result: " + result;
  }
  
  function clearResult() {
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
	document.getElementById("problem").innerHTML = "";
	document.getElementById("result").innerHTML = "";
  }