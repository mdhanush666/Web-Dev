const age = document.getElementById("txtAge");
const btn = document.getElementById("btnEnter");
const msg = document.getElementById("msg");

btn.onclick = function(){

  let getAge = age.value;


  if(getAge != 0){

    if(getAge >= 18){
      msg.textContent = "You can vote";
    }
    else if(getAge < 0){
      msg.textContent = "Enter a valid Age!";
    }
    else{
      msg.textContent = "You can't vote";
    }

  }
  else{
    msg.textContent = "Please enter the Age!";
  }

}

