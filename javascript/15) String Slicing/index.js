
let fullName = "Manomohan Dhanush";

console.log(fullName);

let fName = fullName.slice(0,fullName.indexOf(" "));
let lName = fullName.slice(fullName.indexOf(" ") + 1);

console.log("First Name : " + fName);
console.log("Last Name  : " + lName);

let email = "dhanush@gmail.com";
console.log(email);

console.log("username : " + email.slice(0,email.indexOf("@")));
console.log("user extension : " + email.slice(email.indexOf("@") + 1));