
function addition(n1, n2) {
  return n1 + n2
  }

var answer = 0
btnAdd.onclick=function(){
  lblAnswer = addition(inptNumOne.value, inptNumTwo.value)
}

function multiply(n1, n2) {
  return n1 * n2
  }

var answer = 0
btnMultiply.onclick=function(){
  lblAnswer = multiply(inptNumOne.value, inptNumTwo.value)
}