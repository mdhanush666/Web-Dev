<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IF</title>
</head>
<body>

  <form action="index.php" method="post">
    <label for="txtAge">Age</label>
    <input type="number" name="txtAge" id="txtAge"> <br>

    <input type="submit" value="Enter"> <br><br>

  </form>
  
</body>

<?php

  $age = $_POST["txtAge"];

  if($age == 18){
    echo "You are 18, You can Apply for vote";
  }
  else if($age > 18){
    echo "You are above 18, You can Vote";
  }
  else if($age <= 0){
    echo "Enter a Valid Age!";
  }
  else{
    echo "You are less than 18, You can't vote";
  }

?>

</html>