function add(){
  var num1 = parseInt(document.getElementById('number1').value);
  var num2 = parseInt(document.getElementById('number2').value);
  document.getElementById('number2').focus();
  document.getElementById('number1').value = num1 + num2;

}
function subtract(){
  var num1 = parseInt(document.getElementById('number1').value);
  var num2 = parseInt(document.getElementById('number2').value);
  document.getElementById('output').innerHTML = num1 - num2;

}


function multiply(){
  if (document.getElementById('number1').value == "0") {
    document.getElementById('number1').value = document.getElementById('number2').value;


  }else {
    if (document.getElementById('number1').value != "0") {
      var num1 = parseInt(document.getElementById('number1').value);
      var num2 = parseInt(document.getElementById('number2').value);
      document.getElementById('number1').value = num1 * num2;


    }
  }
}
function divide(){
  if (document.getElementById('number1').value == "0") {
    document.getElementById('number1').value = document.getElementById('number2').value;


  }else {
    if (document.getElementById('number1').value != "0") {
      var num1 = parseInt(document.getElementById('number1').value);
      var num2 = parseInt(document.getElementById('number2').value);
      document.getElementById('number1').value = num1 / num2;
      





    }
  }
}









function button1(){
  document.getElementById('number2').value += "1";
}
function button2(){
  document.getElementById('number2').value += "2";
}
function button3(){
  document.getElementById('number2').value += "3";
}
function button4(){
  document.getElementById('number2').value += "4";
}
function button5(){
  document.getElementById('number2').value += "5";
}
function button6(){
  document.getElementById('number2').value += "6";
}
function button7(){
  document.getElementById('number2').value += "7";
}
function button8(){
  document.getElementById('number2').value += "8";
}
function button9(){
  document.getElementById('number2').value += "9";
}
function button0(){
  document.getElementById('number2').value += "0";
}
