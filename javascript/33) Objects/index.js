/*
      a collection related properties and / or methods
      can represent real world objects (people,product, places)

      object = {key : value,
      function()}
*/

const person1 = {
      Fname: "Manomohan",
      Lname: "Dhanush",
      age:19,
      sayMsg : () => {console.log("Hii, I'm Dhanush")},
}

console.log(person1.Fname);
console.log(person1.Lname);
console.log(person1.age);
person1.sayMsg();

const person2 = {
      Fname: "Manomohan",
      Lname: "Kabileswaran",
      age:21,
      sayMsg : function(){console.log("Hii, I'm Kabileswaran")},
}

console.log(person2.Fname);
console.log(person2.Lname);
console.log(person2.age);
person2.sayMsg();


