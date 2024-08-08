
// ClassList => Element property in JavaScript used to interact
//              with an element's list of classes (CSS classes)
//              Allows you to make reusable classes for many elements
//              across your webpage.Element property in JavaScript used
//              to interact


// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass,newClass)
// contains()

const button = document.getElementById("btn");

button.classList.add("enable");

button.addEventListener("mouseover",event =>{
  event.target.classList.toggle("btn-hover");
})

button.addEventListener("mouseout",event =>{
  event.target.classList.toggle("btn-hover");
})

button.addEventListener("click",event =>{
  if(button.classList.contains("disable")){
    button.textContent = "Disabled 😡";
  }
  else{
    button.classList.replace("enable","disable");
    button.textContent = "Disabled";
  }
})