<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Radio Button - PHP</title>
</head>
<body>

<form action="index.php" method="POST">

  <label>Gender</label>
  <input type="radio" name="sex" value="Male"> Male
  <input type="radio" name="sex" value="Female">Female
<br><br>
  <input type="submit" name="btnSub" value="Click"><br><br>


</form>
  
</body>

<?php

  if(isset($_POST["btnSub"])){
    if(isset($_POST["sex"])){
      $selected = $_POST["sex"];
      echo $selected;
    }
    else{
      echo "Please select one";
    }
  }

  

  
  


?>

</html>