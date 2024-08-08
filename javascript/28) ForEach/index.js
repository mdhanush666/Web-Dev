
/*
  forEach() = method used to iterate over the elements
              of an array and apply a specified function (callback)
              to each element
              
              array.forEach(ca11back)
              element, index, array are provided
*/

let fruits = ["apple","orange","mango"];


function display(element){
  console.log(element);
}

function lower(element, index,array){
  array[index]  = element.toLowerCase();
}

function upper(element, index,array){
  array[index]  = element.toUpperCase();
}

function capitalize(element, index, array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);  
}

// fruits.forEach(lower);
// fruits.forEach(upper);
fruits.forEach(capitalize);

fruits.forEach(display);

