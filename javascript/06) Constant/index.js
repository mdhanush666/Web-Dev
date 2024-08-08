
const PI = 3.14159;

let radius = window.prompt("Enter the Radius");

radius = Number(radius);

let circumference = 2 * PI * radius;

console.log("Circumference of ", radius, "is ", circumference);

// function add(...num){
//   let temp = 0;
//   for(let i = 0; i < num.length; i++){
//     temp += num[i];
//   }

//   return temp;
// }

// function max(...num){
//   let temp = 0;
//   for(let i = 0; i < num.length; i++){
//     if(temp > num[i]){
//       temp = temp;
//     }
//     else{
//       temp = num[i];
//     }
//   }

//   return temp;
// }

// console.log("Total is : " + add(10,20,30,40,50));
// console.log("Max is   : " + max(50,60,70,99,13,5,90));