<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CheckBox - PHP</title>
</head>
<body>

  <form action="index.php" method="POST">

    <label>Subjects</label> <br>
    <input type="checkbox" name="sub[]" value="English">English <br>
    <input type="checkbox" name="sub[]" value="Tamil">Tamil <br>
    <input type="checkbox" name="sub[]" value="Sinhala">Sinhala <br>

    <input type="submit" value="Select" name="btn">

  </form>
  
</body>

<?php

  // if(isset($_POST["btn"])){
  //   if(isset($_POST["english"])){
  //     echo "You selected English <br>";
  //   }
  //   if(isset($_POST["tamil"])){
  //     echo "You selected Tamil <br>";
  //   }
  //   if(isset($_POST["sinhala"])){
  //     echo "You selected Sinhala <br>";
  //   }
  //   else{
  //     echo "Please select atleast one <br>";
  //   }
  // }


    if(isset($_POST["btn"])){

      if(isset($_POST["sub"])){
        $temp = $_POST["sub"];
        foreach($temp as $temp){
          echo $temp."<br>";
        }
      }
      else{
        echo "Please select at least one";
      }

    }
    

?>

</html>