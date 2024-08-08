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
  <h1>Login Success</h1>

  <h3>Welcome to home page</h3>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit esse voluptate, omnis quaerat sunt facere ipsum quia culpa eveniet error unde beatae commodi quos blanditiis? Dolorum consequatur nostrum rerum harum.
    Temporibus harum tenetur, nulla, fuga expedita omnis quos, provident eaque facilis quaerat minus doloribus asperiores ex? Iste repellat inventore architecto neque tempora, nostrum id facilis rem illo, dolore minima ipsam.
    Magnam nostrum ipsum reiciendis sint eligendi delectus eaque. Suscipit, nesciunt unde sunt fugiat debitis incidunt dolor vitae eum iusto aliquid exercitationem labore dignissimos repudiandae omnis reiciendis soluta optio ea molestias?
  </p>

  <br>
  <br>

  <form action="#" method="post">
    <input type="submit" name="logoutBtn" value="Logout">
     <br><br>
  </form>
  
</body>

<?php

  if(isset($_POST["logoutBtn"])){
    session_destroy();
    header("Location:index.php");
  }

?>
</html>