<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>For Loop - PHP</title>
</head>
<body>
  
  <form action="index.php" method="POST">

    <label>Enter a Number to print upto that number : </label>
    <input type="text" name="txtNum"> <br>

    <input type="submit" value="Start"><br><br>

  </form>
</body>

<?php

  $num = $_POST["txtNum"];

  for($i = 1; $i <= $num; $i++){
    echo $i."<br>";
  }

?>

</html>