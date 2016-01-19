<!-- PHP testing -->
<?php
$title= "Sign up";
$wasabi = 'Wasabi Web Test'
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?php echo $title ?> | <?php echo $wasabi ?></title>
  <link rel="stylesheet" href="css/normalize.css">
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- TODO: Remove h1 in production -->
  <h1>WaSIGN UP</h1>
  
  <div class="container">  <!-- Container -->
    <form class="form inner-container" method="post" action="">
      <fieldset class="social-login-fs">
      </fieldset>
      <fieldset class="user-login-fs">
        <legend class="or-legend">Or</legend>
        <!-- e-mail -->
        <label for="email">E-mail</label>
        <input id="email" type="email" name="user_email" placeholder="name@livelio.com" required>
        <!-- password-->
        <label for="password">Password</label>
        <input id="password" type="password" name="user_password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;" required>
      </fieldset>
      <button class="btn action-btn sign-up-btn" type="submit">sign up</button>
    </form>
    <!-- link to login form -->
    <button id="isMember" class="btn link-btn">Already a member?</button>
  </div>  <!-- Container end -->

  <!-- Scripts -->
  <script src="js/app.js"></script>
  <script src="js/links.js"></script>
</body>
</html>
