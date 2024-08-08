<?php

  // example 1

  function msg($name){
    echo "Hello {$name} <br>";
    echo "{$name} how are you? <br>";
  }

  msg("Dhanush");

  // example 2 

  function add($num1,$num2){
    return $num1 + $num2;
  }

  $result = add(10,30);

  echo "<br> {$result}";

  // example 3

  function is_even($n){
    if($n % 2 == 0){
      echo "<br> {$n} is a even Number.";
    }
    else{
      echo "<br> {$n} is a Odd Number.";
    }
  }

  is_even(7);

  // example 4

  function concat(string $n1, string $n2){
    // echo "<br> {$n1} {$n2}";
    return "<br> {$n1} {$n2}";
  }

  $temp = concat("Manomohan","Dhanush");
  $temp2 = concat(10,20);

  echo "<br> {$temp}";
  echo "<br> {$temp2}";

?>