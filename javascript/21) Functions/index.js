
function add(a,b){
  return a+ b;
}

function subtract(a,b){
  return a - b;
}

alert(add(10,20));
alert(subtract(10,20));

//  function expression = a way to define functions as values or variables

const numbersArr = [1,2,3,4,5,6,7,8,9,10];

const getEven = function(elements){
  return elements % 2 == 0? elements:"";
}

console.log(numbersArr.filter(getEven));

