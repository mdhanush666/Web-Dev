<?php

  include("DB_Connect.php");

  $name = "Jerry";

  $qry = "INSERT INTO student_Infor(Name) VALUES ('$name')";

  try{
    mysqli_query($conn,$qry);  
    echo "Data Insert Success";
  }
  catch(mysqli_sql_exception $e){
    echo "Data Insert Error";
  }

  mysqli_close($sonn);

?>