
const btn = document.getElementById("btnSubmit");
const chk = document.getElementById("chkBox");
const rdbJava = document.getElementById("rdbJava");
const rdbPython = document.getElementById("rdbPython");
const rdbC = document.getElementById("rdbC");
const msg = document.getElementById("msg");

let temp = chk.value;

btn.onclick = function(){

    if(chk.checked){
        if(rdbJava.checked){
          msg.textContent = "Your selection are JavaScript & Java";
        }
        else if(rdbPython.checked){
          msg.textContent = "Your selection are JavaScript & Python";
        }
        else if(rdbC.checked){
          msg.textContent = "Your selection are JavaScript & C";
        }
        else{
          msg.textContent = "Your selection is " +  temp;
        }
    }
    else{
      if(rdbJava.checked){
        msg.textContent = "Your selection is Java";
      }
      else if(rdbPython.checked){
        msg.textContent = "Your selection is Python";
      }
      else if(rdbC.checked){
        msg.textContent = "Your selection is C";
      }
    }

}