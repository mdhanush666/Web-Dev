
let numbers = [1,2,3,4,5,6,7,8,9,10];

function isEven(element){
  return element % 2 === 0;
}

function isOdd(element){
  return element % 2 !== 0;
}

const getEven = numbers.filter(isEven);
console.log(getEven);

const getOdd = numbers.filter(isOdd);
console.log(getOdd);


