
let username = "  M Dhanush ";

console.log(username);

console.log("Length : ", username.length);

username = username.trim();
console.log(username);

username = username.toUpperCase();
console.log(username);

username = username.toLowerCase();
console.log(username);

// username  = username.repeat(3);
// console.log(username);

let result = username.startsWith(" ");
console.log(result);

result = username.endsWith("");
console.log(result);

let temp = "123-456-789";
console.log("Before RepeatAll() : " + temp);
temp = temp.replaceAll("-","");
console.log("After RepeatAll() : " + temp);

console.log(username.includes(" "));
 
temp = temp.padStart(15,0);
console.log(temp);

temp = temp.padEnd(15,0);
console.log(temp);

console.log(username + "indexOf('d') : " + username.indexOf("d"));
