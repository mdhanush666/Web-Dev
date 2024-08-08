
const btn = document.getElementById("btnSubmit");
const getWeekNo = document.getElementById("txtWeekNo");
const msg = document.getElementById("msg");

btn.onclick = function(){
  switch(getWeekNo.value){

    case '1':
      msg.textContent = "It's Monday";
      break;
    case '2':
      msg.textContent = "It's Tuesday";
      break;
    case '3':
      msg.textContent = "It's Wednesday";
      break;
    case '4':
      msg.textContent = "It's Thursday";
      break;
    case '5':
      msg.textContent = "It's Friday";
      break;
    case '6':
      msg.textContent = "It's Saturday";
      break;
    case '7':
      msg.textContent = "It's Sunday";
      break;
    default:
      msg.textContent = "Enter a valid Number";

  }
}


 