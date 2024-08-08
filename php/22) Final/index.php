<?php
  include("db_connection.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Final</title>
</head>
<body>

  <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">

    <h2>Welcome to Login page</h2>

    <label>Username :</label><br>
    <input type="text" name="txtUsername"> <br>

    <label>Password :</label><br>
    <input type="password" name="txtPassword"><br><br>

    <input type="submit" name="btnSub" value="Login"> <br><br>

  </form>
  
</body>

<?php

  $username = filter_input(INPUT_POST,"txtUsername",FILTER_SANITIZE_SPECIAL_CHARS);
  $password = filter_input(INPUT_POST,"txtPassword",FILTER_SANITIZE_SPECIAL_CHARS);

  if(isset($_POST["btnSub"])){

    if(empty($username)){
      echo "Please enter Username";
    }
    elseif(empty($password)){
      echo "Please enter Password";
    }

    else{
      $pHash = password_hash($password,PASSWORD_DEFAULT);
      $qry = "INSERT INTO final_login (username,password) VALUES ('$username','$pHash')";
      try{
        mysqli_query($conn,$qry);
        echo "Data Insert Success";
        $username = null;
        $password = null;
      }
      catch(mysqli_sql_exception){
        echo "The Username '{$username}' is already taken.Try again!";
      }
    }
  }

  mysqli_close($conn);

?>

</html>