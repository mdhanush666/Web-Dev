<?php

  $xml = new DOMDocument();

  $xml -> load("sample.xml");

  if($xml -> validate()){
    echo "It's a valid Document";
  }
  else{
    echo "It's not a valid Document";
  }

?>