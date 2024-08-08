
<?php

  $db_server = "localhost";
  $username = "root";
  $passowrd = "";
  $dbName = "DB_connect_first";

  // if($conn){
  //   echo "Connect Success";
  // }
  // else{
  //   echo "Connection Failed";
  // }

  try{
    $conn = mysqli_connect($db_server,$username,$passowrd,$dbName);
  }
  catch(mysqli_sql_exception){
    echo "Connection Failed";
  }

  


?>