<?php

  $password = "Dhanush@2005";

  $pHash = password_hash($password,PASSWORD_DEFAULT);

  echo $pHash."<br><br><br>";

  $confirmPass = "Dhanush2005";

  if(password_verify($confirmPass,$pHash)){
    echo "Login Success";
  }
  else{
    echo "Login failed";
  }

?>