<?php

  $temp = 29;

  if($temp > 0 && $temp < 30){
    echo "Weather is good";
  }
  else if($temp < 0 || $temp > 30){
    echo "Weather is too bad";
  }
  else{
    echo "Weather is bad";
  }

?>