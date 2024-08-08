<?php

  $names = array("Tom","Jerry","Ben","Clerk");
  
  array_push($names,"Dhanush"); // push add a element in last of ur array
  array_push($names,"Guven","Kevin");

  array_pop($names);    // pop removes last element of ur array

  array_shift($names);    // shift removes the first element of an array

  foreach($names as $names){
    echo $names."<br>";
  }

  

?>