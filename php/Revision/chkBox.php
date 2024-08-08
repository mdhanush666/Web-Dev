<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CheckBox - PHP</title>
</head>
<body>

  <form action="#" method="POST">

    <label>Subjects</label> <br>
    <input type="checkbox" name="sub[]" value="English">English <br>
    <input type="checkbox" name="sub[]" value="Tamil">Tamil <br>
    <input type="checkbox" name="sub[]" value="Sinhala">Sinhala <br>

    <input type="submit" value="Select" name="btn"><br><br>

  </form>
  
</body>

<?php

  if(isset($_POST["btn"])){
    if(isset($_POST["sub"])){

      echo "Your Selection is : <br>";
      
      foreach($_POST ["sub"] as $_POST["sub"]){
        echo "{$_POST["sub"]} <br>";
      }
    }
    else{
      echo "Please Select at least one option form the above list";
    }
  }


?>
</html>