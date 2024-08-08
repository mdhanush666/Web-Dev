
// NodeList   =>    Static collection of HTML elements by (id,class,element)
//                  Can be created by using querySelectorAll()
//                  Similar to an array, but no (map(), filter(), reduce())
//                  NodeList won't update to automatically reflect changes


let buttons = document.querySelectorAll(".btn-container .btns");

// ADD AN ELEMENT

const newButton = document.createElement("Button");
const div = document.getElementById("btn-container");

newButton.textContent = "Button 5";
newButton.className = "btns";

div.appendChild(newButton);

buttons = document.querySelectorAll(".btn-container .btns");



// ADD HTML / CSS PROPERTIES

buttons.forEach(btn =>{
  btn.style.backgroundColor = "hsl(202,100%,60%)";
})

buttons.forEach(btn =>{
  btn.addEventListener("click",event =>{
    event.target.style.backgroundColor = "red";
  })
})

buttons.forEach(btn =>{
  btn.addEventListener("mouseover",event =>{
    event.target.style.backgroundColor = "hsl(202,100%,40%)";
  })
})

buttons.forEach(btn =>{
  btn.addEventListener("mouseout",event =>{
    event.target.style.backgroundColor = "hsl(202,100%,60%)";
  })
})

// REMOVE AN ELEMENT

buttons.forEach(btn =>{
  btn.addEventListener("click",event =>{
    event.target.remove();
    buttons = document.querySelectorAll(".btn-container .btns");
    console.log(buttons);
  })
})