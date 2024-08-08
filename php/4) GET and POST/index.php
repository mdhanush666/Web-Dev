<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GET - POST</title>
</head>
<body>

<form action="index.php" method="POST">

  <label>Username :</label>
  <input type="text" name="username"/> <br>
  
  <label>Password :</label>
  <input type="password" name="password"/> <br>

  <input type="submit" value="Login">
  <br><br>

</form>  
</body>
</html>

<?php

    echo "Username is : {$_POST["username"]} <br>";
    echo "Password is : {$_POST["password"]} <br>";
  

?>