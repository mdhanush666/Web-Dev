
/*

  Spread Operator is used to unpack the elements
   symbol = ...

*/

let names = ["Dhanush","Kabil","Jayaletchume","Manomohan"];

let copyNames = [...names];

for(name of copyNames){
  console.log(name);
}