
<?php

  $db_server = "localhost";
  $username = "Dhanush";
  $password = "Dhanush!1896$";

  $db_Name = "studb";

  try{
    $conn = mysqli_connect($db_server,$username,$password,$db_Name);
    // echo "Connection success";
  }
  catch(mysqli_sql_exception){
    echo "Connection failed!";
  }

?>