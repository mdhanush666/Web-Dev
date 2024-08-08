
const inUpperCase = document.getElementById("inUpperCase");
const inLowerCase = document.getElementById("inLowerCase");
const inNumbers = document.getElementById("inNumbers");
const inSymbols = document.getElementById("inSymbols");
const output = document.getElementById("output");

let upperCase = "",lowerCase = "",numbers = "",symbols = "";
let allowesChars = "",Gpassword = "",getLen;

for(let i = 65; i <= 90; i++){
  upperCase += String.fromCharCode(i);
}
for(let i = 97; i <= 122; i++){
  lowerCase += String.fromCharCode(i);
}
for(let i = 48; i <= 57; i++){
  numbers += String.fromCharCode(i);
}

  symbols += "!@#$%^&*";

function btnGenerate(){

  Gpassword = "";
  allowesChars = "";

  if(!inUpperCase.checked && !inLowerCase.checked && 
      !inNumbers.checked && !inSymbols.checked){

        alert("Please Select atleast one Option!");

  }
  else{
    while(true){
      getLen = window.prompt("Enter the Password Length :");
      getLen = Number(getLen);

      if(isNaN(getLen)){
        alert("Please Enter only Numbers!");
      }
      else{
        if(getLen != 0){
          if(inUpperCase.checked){
            allowesChars += upperCase;
          }
          if(inLowerCase.checked){
            allowesChars += lowerCase;
          }
          if(inNumbers.checked){
            allowesChars += numbers;
          }
          if(inSymbols.checked){
            allowesChars += symbols;
          }
  
          for(let i = 0; i < getLen; i++){
            let result = Math.trunc(Math.random() * allowesChars.length);
            Gpassword += allowesChars.charAt(result);
          }
          output.textContent = Gpassword;
          break;
        }
        else{
          alert("Password Length can't be Empty!");
        }
      }
    }
  }
}