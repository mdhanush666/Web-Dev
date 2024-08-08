/*

JSON    =   (JavaScript Object Notation) data-interchange format
            Used for exchanging data between a server and a web application
            JSON files {key: value} OR [valuel, value2, value3]
            
            JSON.stringify() = converts a JS object to a JSON string.
            JSON.parse() = converts a JSON string to a JS object

*/


// stringify..............

console.log("stringify..........");

const names = ["Tom","Jerry","Ben"];

const jsonNames = JSON.stringify(names);

console.log(jsonNames);

const people = [
  {
  "name":"Dhanush",
  "age":19,
  "isEmployed":false
  },

  {
  "name":"Kabil",
  "age":21,
  "isEmployed":false
  },
  
  {
  "name":"Tom",
  "age" :25,
  "isEmployed":true
  }
];

const jsonPeople = JSON.stringify(people);

console.log(jsonPeople);

const person = {
  "name":"Tom",
  "age" :25,
  "isEmployed":true
  };

  const jsonPerson = JSON.stringify(person);
  console.log(jsonPerson);

  // Parse...............

  const names2 = `["Tom","Jerry","Ben"]`;

  const people2 = `[{"name":"Dhanush","age":19,"isEmployed":false},
    {"name":"Kabil","age":21,"isEmployed":false},
    {"name":"Tom","age" :25,"isEmployed":true}]`;

  const person2 = `{"name":"Tom","age" :25,"isEmployed":true}`;

    console.log("Parse....");

    const jsonNames2 = JSON.parse(names2);    
    console.log(jsonNames2);

    const jsonPeople2 = JSON.parse(people2);    
    console.log(jsonPeople2);

    const jsonPerson2 = JSON.parse(person2);    
    console.log(jsonPerson2);

    console.log("using Fetch.......");

    fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(element => console.log(element)))
    .catch(error => console.error(error))