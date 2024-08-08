
/*

element selectors   = Methods used to target and manipulate HTML elements
                      They allow you to select one or multiple HTML elements
                      from the DOM (Document Object Model)

document.getE1ementById()          =>    ELEMENT OR NULL
document.getE1ementsC1assName()    =>    HTML COLLECTION
document.getE1ementsByTagName()    =>    HTML COLLECTION
document.querySe1ector()           =>    FIRST ELEMENT OR NULL
document.querySe1ectorA11()        =>    NODELIST

*/


const ID = document.getElementById("ID");

ID.style.backgroundColor = "Yellow";

const btns = document.getElementsByClassName("btn");

for(let btn of btns){
  btn.style.backgroundColor = "#33333380";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "20px";
  btn.style.padding = "10px 20px";
}

const liElements = document.getElementsByTagName("li");

for(liEle of liElements){
  liEle.style.backgroundColor = "lightblue";
}

const qrySel_li = document.querySelector("li");
const qrySel_btn = document.querySelector(".btn");

qrySel_li.style.backgroundColor = "red";
qrySel_btn.style.backgroundColor = "green";

const qryAll = document.querySelectorAll("li");

qryAll[0].style.backgroundColor = "red";
qryAll[1].style.backgroundColor = "blue";
qryAll[2].style.backgroundColor = "yellow";