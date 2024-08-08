
const txtNum = document.getElementById("txtNum");
const rdbToFahrenheit = document.getElementById("rdbToFahrenheit");
const rdbToCelsius = document.getElementById("rdbToCelsius");
const out = document.getElementById("out");


/*
To Celsius ==> (value - 32) * (5/9)
To Fahrenheit ==> value * 9 / 5 + 32 
*/

function btnCalClick(){

  let getValue = Number(txtNum.value);
  
  if(getValue == 0){
    out.textContent = "Please enter the Value!";
  }
  else{

    if(rdbToCelsius.checked){
      getValue = (getValue - 32) * (5/9);
      out.textContent = getValue.toFixed(1) + "°C";
    }
    else if(rdbToFahrenheit.checked){
      getValue = getValue * 9 / 5 + 32;
      out.textContent = getValue.toFixed(1) + "°F";
    } 
    else{
      out.textContent = "Select the Conversion type";
    }

  }
}
