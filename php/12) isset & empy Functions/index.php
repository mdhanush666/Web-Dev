<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ISSET & EMPTY - PHP</title>
</head>
<body>
  <form action="index.php" method="POST">

    <label for="UserName">Username : </label>
    <input type="text" name="txtUsername" id="UserName"><br>

    <label for="password">Password :</label>
    <input type="password" name="txtPassword" id="password"><br>

    <input type="submit" value="Login" name="btn_login">
    <input type="reset" value="Clear" name="btn_clear"> <br><br>

  </form>
</body>

<?php

  $username = $_POST["txtUsername"];
  $password = $_POST["txtPassword"];

  if(isset($_POST["btn_login"])){
    if(empty($username) || empty($password)){
      echo "Both Fields must be filled";
    }

    else{
      echo "Hello {$username} <br>";
      echo "{$username} your password is : {$password} <br>";
    }
  }

?>
</html>