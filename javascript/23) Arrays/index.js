
let names = ["Tom","Jerry","Kamal"];

names.push("Dhanush"); // add a element to the end of the array
names.pop(); // removes the last element from the array

names.unshift("Ben 10"); // add a element to the start of the array
names.shift(); // removes the start element from the array


// for loop...

console.log("Enhanced For Loop...");

for(let i = 0; i < names.length; i++){
  console.log(names[i]);
}

// enhanced for loop...

console.log("Enhanced For Loop...");

for(let name of names){
  console.log(name);
}