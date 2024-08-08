
const box = document.getElementById("box");

let moveValue = 10;
let x = 0, y = 0;

document.addEventListener("keydown",event =>{

  if(event.key.startsWith("Arrow")){

    box.style.backgroundColor = "tomato";
    box.textContent = "😯";
    event.preventDefault();

    switch(event.key){
      case "ArrowUp":
        y -= moveValue;
        break;
      case "ArrowDown":
        y += moveValue;
        break;
      case "ArrowLeft":
        x -= moveValue;
        break;
      case "ArrowRight":
        x += moveValue;
        break;
    }
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
  }

})

document.addEventListener("keyup",event =>{
  box.style.backgroundColor = "lightgreen";
  box.textContent = "🤪";
})