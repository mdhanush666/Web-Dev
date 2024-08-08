
const btn = document.getElementById("btn");
const img = document.getElementById("img");



btn.addEventListener("click",event =>{
  if(btn.textContent == "Hide"){
    img.style.visibility = "hidden";
    btn.textContent = "Show";
  }
  else{
    img.style.visibility = "visible";
    btn.textContent = "Hide";
  }
})