<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Revision - Radio Button</title>
</head>
<body>

<form action="#" method="post">

  <label>Gender : </label> <br>
  <input type="radio" name="sex" value="Male"> Male
  <input type="radio" name="sex" value="Female"> Female
  <br><br>

  <input type="submit" name="btnSub" value="Submit">
  <input type="submit" name="btnClear" value="Clear Message"><br><br>

</form>
</body>

<?php

  if(isset($_POST["btnSub"])){
    if(isset($_POST["sex"])){
      // $temp = $_POST["sex"];
      echo "Your Gender is {$_POST["sex"]} <br>";
    }
    else{
      echo "Please select your gender <br>";
    }
  }
  elseif(isset($_POST["btnClear"])){
    echo null;
  }

?>

</html>