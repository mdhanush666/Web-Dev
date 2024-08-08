
const txtOut = document.getElementById("display");
const getCal = document.getElementById("getCal");

let n1,n2,total = 0;
let plus = false, mynus = false, multiply = false, divide = false;

function appendToDisplay(input){
  if(input == '+'){
    n1 = Number(txtOut.value);
    getCal.textContent  = n1 + " + ";
    txtOut.value = null;

    plus = true;
    mynus = false; multiply = false; divide = false;
  
  }
  else if(input == '-'){
    n1 = Number(txtOut.value);
    getCal.textContent  = n1 + " - ";
    txtOut.value = null;

    mynus = true;
    plus = false; multiply = false; divide = false;
  
  }
  else if(input == '*'){
    n1 = Number(txtOut.value);
    getCal.textContent  = n1 + " x ";
    txtOut.value = null;

    multiply = true;
    mynus = false; plus = false; divide = false;
  
  }
  else if(input == '/'){
    n1 = Number(txtOut.value);
    getCal.textContent  = n1 + " / ";
    txtOut.value = null;

    divide = true;
    mynus = false; multiply = false; plus = false;
  
  }
  else{
    txtOut.value += input;
  }  
}

function clearValues(){
  txtOut.value = "";
  getCal.textContent = "";
  n1 = null, n2 = null;
}

function calculate(){
  if(txtOut.value != ""){
    n2 = Number(txtOut.value);

    getCal.textContent += n2 + " = ";

    if(plus){
      total = n1 + n2;
    }
    else if (mynus){
      total = n1 - n2;
    }
    else if (multiply){
      total = n1 * n2;
    }
    else if (divide){
      total = n1 / n2;
    }

    txtOut.value = total;
    getCal.textContent += total;    

  }
  else{
    txtOut.value = "";
  }
}