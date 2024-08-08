
let fruits = ["banaana","orange","grapes","apple"];

console.log(fruits);

fruits.sort();

console.log(fruits);


let nums = [1,10,8,3,7,6,4,2,5];

console.log(nums);

nums.sort();

console.log(nums); 

// Ascending 
nums.sort((a,b) => a-b);

console.log(nums);

// Descending
nums.sort((a,b) => b-a);

console.log(nums);

const person = [{Fname:"Dhanush",age:19},
                {Fname:"Tom",age:25},
                {Fname:"Jerry",age:16}];

person.sort((a,b) => a.age - b.age);
console.log(person);
