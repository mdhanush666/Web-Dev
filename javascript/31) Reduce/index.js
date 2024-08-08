/*
  .reduce()   = Reduce the elements of an array to a single value  
*/

let values = [10,50,60,79,88,99,15,89];

function getMax(accumulator,elements){
  return Math.max(accumulator,elements);
}

console.log(values.reduce(getMax));
console.log(values.reduce(getMin));
  
function getMin(accumulator,elements){
  return Math.min(accumulator,elements);
}