<?php

  $db_Server  = "localhost";
  $userName   = "Dhanush";
  $password   = "Dhanush!1896$";

  $db = "db_connect_first";

  try{
    $conn = mysqli_connect($db_Server,$userName,$password,$db);
    echo "Connection Success";    
  }
  catch(mysqli_sql_exception $e){
    // echo "{$e} <br>";
    echo "Connection Failed";
  }

  // if($conn){
  //   echo "Connection Success";
  // }
  // else{
  //   echo "Connection Failed!";
  // }

?>