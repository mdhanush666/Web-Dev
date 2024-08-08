
// DOM Navigation

// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// parentElement
// children

// ------------firstElementChild----------

const element = document.getElementById("fruits");

const fElement = element.firstElementChild;

fElement.style.backgroundColor = "yellow";

const ele1 = document.querySelectorAll("ul");

for(let ele of ele1){
  ele.firstElementChild.style.backgroundColor = "red";
}

// ------------lastElementChild----------

const element2 = document.getElementById("fruits");


const lElement = element2.lastElementChild;

lElement.style.backgroundColor = "pink";

const ele2 = document.querySelectorAll("ul");

for(let ele of ele2){
  ele.lastElementChild.style.backgroundColor = "blue";
}
