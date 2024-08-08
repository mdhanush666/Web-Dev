
const btn = document.getElementById("btnSubmit");
const getAge = document.getElementById("txtAge");
const msg = document.getElementById("msg");


btn.onclick = function(){
  let getMsg = getAge.value >= 18? "You can vote" : "You can't vote";
  msg.textContent = getMsg;
}
 