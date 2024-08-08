<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DB - Connect</title>
</head>
<body>

<i>Username is : <b>admin</b></i> <br>
<i>Password is : <b>12345678</b></i> <br><br>

<form action="#" method="post">

  <label for="#txtUsername">Username :</label>
  <input type="text" id="txtUsername" name="txtUsername"> <br><br>

  <label for="txtPassowrd">Password :</label>
  <input type="password" id="txtPassword" name="txtPassword" minlength="8"> <br><br>

  <input type="submit" name="btnSub" value="Login"> <br><br>


</form>
</body>

<?php

  $db_server  = "localhost";
  $username   = "Dhanush";
  $password   = "Dhanush!1896$";

  $dbName = "login_first";

  try{
    $conn = mysqli_connect($db_server,$username,$password,$dbName);
    echo " DB Connection Success";
  }
  catch(mysqli_sql_exception){
    echo "DB Connection Failed";
  }

  if(isset($_POST["btnSub"])){
    if(!empty($_POST["txtUsername"]) && !empty($_POST["txtPassword"])){
      $username = $_POST["txtUsername"];
      $password = $_POST["txtPassword"];
    }
    else{
      echo "<br>Both Fields must be filled<br>";
    }

    if($username === "admin" && $password === "12345678"){

      $pHASH = password_hash($password,PASSWORD_DEFAULT);

      $qry = "INSERT INTO login_details (userName,password)
              VALUES ('$username','$pHASH')";
  
      try{
        mysqli_query($conn,$qry);
        echo "<br>Data Inserted Success";
        $username = null;
        $password = null;
      }
      catch(mysqli_sql_exception){
        echo "<br>Data Insert failed!";
      }

      mysqli_close($conn);
    }

    else{
      echo "<br>Invalid Username / Password!";
      $username = null;
      $password = null;
    }
    
  }

?>

</html>