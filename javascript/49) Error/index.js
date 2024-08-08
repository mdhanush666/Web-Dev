
try{
  const getAge = Number(window.prompt("Enter your age"));

  if(isNaN(getAge)){
    throw new Error("Age must be an Number!");
  }
  else{
    console.log(`your age is : ${getAge}`);
  }
}
catch(error){
  console.log(error);
}



try{
  const divident = Number(window.prompt("Enter the Divident : "));
  const divisor = Number(window.prompt("Enter the Divisor : "));

  if(isNaN(divident) || isNaN(divisor)){
    console.error("Please enter only numbers!");
  }
  else if(divisor == 0){
    console.error("0 is not valid input to calculate!")
  }
  else{
    console.log(divident / divisor);
  }
}
catch(error){
  console.log(error);
}

console.log("This is end of the Code");