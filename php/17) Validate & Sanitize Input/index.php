<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validate Input - PHP</title>
</head>
<body>

  <form action="index.php" method="POST">

    <label>Name</label>
    <input type="text" name="txtName"><br>
    
    <label>Age</label>
    <input type="text" name="txtAge"><br>
    
    <label>Email</label>
    <input type="text" name="txtEmail"><br>

    <input type="submit" name="btn" value="Submit"> <br><br>

  </form>
  
</body>

<?php

  if(isset($_POST["btn"])){

    // $name = filter_input(INPUT_POST,"txtName",
    // FILTER_SANITIZE_SPECIAL_CHARS);

    // echo "<br> Hello $name";

    // $age = filter_input(INPUT_POST,"txtAge",
    // FILTER_SANITIZE_NUMBER_INT);

    // if(empty($age)){
    //   echo "<br> Invalid Age";
    // }
    // else{
    //   echo "<br>$name Your are $age years old";
    // }

    // $email = filter_input(INPUT_POST,"txtEmail",
    // FILTER_SANITIZE_EMAIL);
    
    // echo "<br> Your email is $email";

    // Validate
    
    //AGE
    $ageV = filter_input(INPUT_POST,"txtAge",
    FILTER_VALIDATE_INT);

    if(empty($ageV)){
      echo "<br> Age is Invalid";
    }
    else{
      echo "<br> You are $ageV years old";
    }
    
    // EMAIL
    $emailV = filter_input(INPUT_POST,"txtEmail",
    FILTER_VALIDATE_EMAIL);

    if(empty($emailV)){
      echo "<br>Invalid Email";
    }
    else{
      echo "<br> Your email is $emailV";
    }



  }

?>
</html>