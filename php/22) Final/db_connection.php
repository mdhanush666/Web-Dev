<?php

  $db_server = "localhost";
  $username = "Dhanush";
  $password = "Dhanush!1896$";

  $db_Name = "final";

  try{
    $conn = mysqli_connect($db_server,$username,$password,$db_Name);
    echo "Database Connection Success";
  }
  catch(mysqli_sql_exception){
    echo "Database Connection Failed!";
  }


?>