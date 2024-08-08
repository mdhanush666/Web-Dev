
let username;

//username = window.prompt();

//document.getElementById("head1").textContent += " " + username;

document.getElementById("btnSubmit").onclick  = function(){
  
  username = document.getElementById("txtName").value;
  document.getElementById("head1").textContent += " " + username;
  
  document.getElementById("txtName").value = null;

}