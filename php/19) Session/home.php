
<?php
  session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home - Page</title>
</head>
<body>

  <h1>This is Home</h1>

  <form method="post">
    <input type="submit" value="Logout" name="logout_btn">
    <br><br>
  </form>
</body>

<?php

  if(isset($_POST["logout_btn"])){
    session_destroy();
    header("Location:index.php");
  }


?>

</html>