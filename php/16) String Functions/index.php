<?php

  $name = "  Dhanush Dhanu  ";
  $phNo = "075-956-1933";

  //$name = strtolower($name);
  //$name = strtoupper($name);
  
    $name = trim($name);
  
  //$name = strlen($name);
  
  //$name = strrev($name);
  //$name = str_replace("T","D",$name);
  //$name = str_shuffle($name);

  //$name = strpos($phNo,"-");
  
  //$name = substr($name,0,7);
  //$name = substr($name,8);

  $name = explode(" ",$name);

  foreach($name as $name){
    echo "{$name} <br>";
  }

  //echo "<br><br> {$name}";




?>