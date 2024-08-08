<?php

  $xml = new DOMDocument("ex1.xml");

  if($xml -> validate()){
    echo "It's a valid Document";
  }
  else{
    echo "It's not a valid Document";
  }

?>