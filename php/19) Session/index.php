
<?php

  session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Main - Page</title>
</head>
<body>

<h1>This is Main</h1>

<form method="post">
  <label>Username :</label><br>
  <input type="text" name="txtName"><br>

  <label>Password :</label><br>
  <input type="password" name="txtPassword"><br> <br>

  <input type="submit" name="login_btn" value="Login"> <br><br>
</form>
</body>

<?php

  if(isset($_POST["login_btn"])){
   
    if(!empty($_POST["txtName"]) && 
       !empty($_POST["txtPassword"])){
        
        $_SESSION["username"] = $_POST["txtName"];
        $_SESSION["password"] = $_POST["txtPassword"];

        header("Location:home.php");

    }
    else{
      echo "Missing username/password!.";
    }


  }


?>

</html>