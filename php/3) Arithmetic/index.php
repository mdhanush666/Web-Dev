<?php

  // Arithmetic Operators
  // *,/,+,-,%

  $a = 10;
  $b = 2;

  echo "Number 1 is : {$a}<br>";
  echo "Number 2 is : {$b}<br>";
  echo "<br>";

  echo "Addition (+) <br>";
  echo $a + $b, "<br><br>";

  echo "Subtraction (-) <br>";
  echo $a - $b, "<br><br>";

  echo "Multiplication (*) <br>";
  echo $a * $b, "<br><br>";

  echo "Division (/) <br>";
  echo $a / $b, "<br><br>";

  echo "Modules (%) <br>";
  echo $a % $b, "<br><br>";

  // Increment and Decrement 
  // ++, --
  
  $a++;
  $b--;

  echo "Increment of a <br>";
  echo $a,"<br><br>";

  echo "Decrement of b <br>";
  echo $b,"<br><br>";

  // Operator Precedence
  // ()
  // **
  // * / %
  // + -

  echo "Operator Precedence<br><br>";

  $temp = 1 + 2 - 1 * 2 / 5 ** 3;
  echo $temp;

?>