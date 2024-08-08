
<?php
  include("DB_Connection.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student-Details</title>
</head>
<body>

<form action="#" method="post">

<table border="0" cellpadding="0" cellspacing = "0">

  <tr>
    <th>
    <label for="#Name">Name : </label>
    </th>
    <td>
    <input type="text" id="Name" name="txtName">
    </td>
  </tr>

  <tr>
    <th>
      <label for="#txtAddress"> Address : </label>
    </th>
    <td>
      <textarea name="txtAddress" cols="30" rows="2"></textarea>
    </td>
  </tr>

  <tr>
    <th>
      <label for="#gender">Gender : </label>
    </th>
    <td>
      <input type="radio" id="gender" name="sex" value="M">Male
      <input type="radio" name="sex" value="F">Female
    </td>
  </tr>

  <tr>
    <th>
      <label for="#phNo">Phone Number : </label>
    </th>
    <td>
      <input type="text" maxlength="10" name="txtPhNo" id="phNo">
    </td>
  </tr>

  <tr>
    <th>
    <input type="submit" name="btnSub" value="Submit">
    </th>
    <th>
    <input type="submit" name="btnchk" value="Check">
    </th>
    <th>
    <input type="submit" name="btnReset" value="Clear">
    </th>
  </tr>

</table>

</form>
  
</body>

<?php

  if(isset($_POST["btnSub"])){

    if( !empty($_POST["txtName"]) && !empty($_POST["txtAddress"]) &&
        !empty($_POST["sex"]) && !empty($_POST["txtPhNo"])){
          $name = $_POST["txtName"];
          $address = $_POST["txtAddress"];
          $gen = $_POST["sex"];
          $phNo = $_POST["txtPhNo"];

          $qry = "INSERT INTO student_details (Name,Address,Gender,PhoneNo)
            VALUES('$name','$address','$gen','$phNo')";

          try{
            mysqli_query($conn,$qry);
            echo "Data Insert Success";
            $name = null;
            $address = null;
            $gen = null;
            $phNo = null;
          }
          catch(mysqli_sql_exception){
            echo "Data Insert Fail!";
          }

          mysqli_close($conn);
    }

    else{
      echo "All Fields must be Fill";
    }

  }

  elseif(isset($_POST["btnchk"])){
    $qry = "SELECT * FROM student_details";

    $result = mysqli_query($conn,$qry);

    if(mysqli_num_rows($result) > 0){

      while($rows = mysqli_fetch_assoc($result)){
        echo "<br><br>";
        echo $rows['ID']."<br>";
        echo $rows['Name']."<br>";
        echo $rows['Address']."<br>";
        echo $rows['Gender']."<br>";
        echo $rows['PhoneNo']."<br><br>";
      }

      
    }
    else{
      echo "Data Not Found!";
    }

  }
  if(isset($_POST["btnReset"])){
    echo null;
  }

?>

</html>