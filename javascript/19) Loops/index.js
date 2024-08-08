
let login = false;

 while(!login){
   let username = window.prompt("Enter your username :");
   let password = window.prompt("Enter your password :");

   if(username == "dhanush" && password == "Dhanush@2005"){
      alert("Login Success");
      login = true
   }
   else{
      alert("Invalid Login Information!");
   }

 }

 for(let i = 1; i <= 10; i++){
   console.log(i);
 }