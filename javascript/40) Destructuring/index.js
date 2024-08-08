
// Destructuring...
/*

  []  = to perform array destructuring
  {}  = to perfrom object destructuring

*/

// Example - 1

let a = 1, b = 2;
[a,b] = [b,a]

console.log(a);
console.log(b);

// Example 2

const colors = ["red","blue","black","white"];

[colors[0],colors[3]] = [colors[3],colors[0]];

console.log(colors);

// Assign Array elements to variables..

const names = ["Tom","Jery","Kamal","Supun"];

const[fName,sName,...extraNames] = names;

console.log(names);
console.log(fName);
console.log(sName);
console.log(extraNames);

// Extract values from Objects..

const person1 = {
  firstName : "Dhanush",
  lastName  : "Dhanu",
  Age       : 19,
}

const {firstName,lastName,Age} = person1;

console.log(firstName);
console.log(lastName);
console.log(Age);

// Destructuring in Functions...

function displayPerson({firstName,lastName,age}){
  console.log(`Name : ${firstName} ${lastName}`);
  console.log(`Age  : ${Age}`);
}

displayPerson(person1);