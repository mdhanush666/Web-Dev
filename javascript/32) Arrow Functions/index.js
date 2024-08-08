/*
      a concise way to write function expressions
      good for simple functions that you use only once
      (parameters) => some code
*/

const numbersArr = [1,2,3,4,5,6,7,8,9,10];

const msg = () => console.log("hello");

msg();

const power = numbersArr.map((element) => {return Math.pow(element,2)});
console.log(power);

const isEven = numbersArr.filter((element) => {return element % 2 === 0?element:""});
console.log(isEven);

const getMax = numbersArr.reduce((accumulator,element) => {return Math.max(accumulator,element)});
console.log(getMax);

console.log(numbersArr);
const total = numbersArr.reduce((accumulator,element) => {return accumulator + element});
console.log(total);

