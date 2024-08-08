   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Math Function - PHP</title>

</head>
<body>
  
  <form action="index.php" method="post">

    <label>X : </label>
    <input type="text" name="x"><br>
    
    <label>Y : </label>
    <input type="text" name="y"><br>
    
    <label>Z : </label>
    <input type="text" name="z"><br> <br>

    <input type="submit" value="Click"> <br><br><br>

  </form>
</body>

<?php

  $x = $_POST["x"];
  $y = $_POST["y"];
  $z = $_POST["z"];

  echo "Absolute of X : ", abs($x),"<br>";
  echo "Round of X    : ", round($x),"<br>";
  echo "Floor of X    : ", floor($x),"<br>";
  echo "Ceil of X     : ", ceil($x),"<br>";
  echo "sqrt of X     : ", sqrt($x),"<br>";
  echo "Power of X in Y : ", pow($x,$y),"<br>";
  echo "Max of X,Y,Z : ", max($x,$y,$z),"<br>";
  echo "Min of X,Y,Z : ", min($x,$y,$z),"<br>";

  echo "Pi is : ", pi(),"<br>";
  echo "Random : ", rand(1,10),"<br>";



?>

</html>