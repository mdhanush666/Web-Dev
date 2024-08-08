
const box = document.getElementById("box");

function changeColor(event){
  event.target.style.backgroundColor = "lightblue";
  box.textContent = "u fool 🤪";  
}

box.addEventListener("click",changeColor);

box.addEventListener("mouseover",event =>{
  event.target.style.backgroundColor = "tomato";
  box.textContent = "no no 😯";
})

box.addEventListener("mouseout",event =>{
  event.target.style.backgroundColor = "lightblue";
  box.textContent = "Click me 😃";
})