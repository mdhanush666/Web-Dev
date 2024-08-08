<?php
  session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
</head>
<body>

<p>
  The UserName is "Dhanush". <br> The Passowrd is "mjkd1896".
</p>

<form action="#" method="POST">

  <label for="#txtName">Username : </label>
  <input type="text" id="txtName" name="txtName" required placeholder="Enter username"><br>
  
  <label for="#txtPassword">Password : </label>
  <input type="password" id="txtPassword" name="txtPassword" minlength="8" required placeholder="********"><br>

  <input type="submit" value="Login" name="loginBtn"> <br><br>

</form>
</body>

<?php

  $userName = "Dhanush";
  $passWord = "mjkd1896";

  if(isset($_POST["loginBtn"])){
    if($_POST["txtName"] === $userName && $_POST["txtPassword"] === $passWord){
      header("Location:home.php");
    }
    elseif(empty("txtName") || empty("txtPassword")){
      echo "Both Username and Password Fields must be filled! <br>";
    }
    else{
      echo "Invalid Username or Password! <br>";
    }
  }

?>
</html>