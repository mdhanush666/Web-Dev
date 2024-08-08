
// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

let fruits = ["apple","orange","mango"];

function lower(element, index,array){
  return element.toLowerCase();
}

function upper(element, index,array){
  return element.toUpperCase();
}

function capitalize(element, index, array){
  return element.charAt(0).toUpperCase() + element.slice(1);  
}

// const uppercase = fruits.map(upper);
// console.log(uppercase);

//  const lowercase = fruits.map(lower);
//  console.log(lowercase);

// const capitalEachWord = fruits.map(capitalize);
// console.log(capitalEachWord);

let dates = ["01-2005-06","04-2003-09"];

function formatDate(element){
  let div = element.split("-");
  return div[2] + "-" + div[0] + "-" + div[1];
}

const afterFormatDate = dates.map(formatDate);
console.log(afterFormatDate);

