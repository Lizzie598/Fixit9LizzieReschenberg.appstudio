
function addition(n1, n2) {
  return n1 + n2
  }

var answer = 0
btnAdd.onclick=function(){
  lblAnswer.value = addition(Number(inptNumOne.value), Number(inptNumTwo.value))
}

function multiply(n1, n2) {
  return n1 * n2
  }

var answer = 0
btnMultiply.onclick=function(){
  lblAnswer.value = multiply(inptNumOne.value, inptNumTwo.value)
}

btnClear.onclick=function(){
  lblAnswer.value = ''
  inptNumOne.value = ''
  inptNumTwo.value = ''
}
