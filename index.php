<!-- PHP testing -->
<?php
$title = 'Login';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><?php echo $title ?></title>
  <link rel="stylesheet" href="css/normalize.css">
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- TODO: Remove h1 in production -->
  <h1>Wasabi Web Back-End Test yeah mmm</h1>
  <!-- need server side script for action submit -->
  <div class="container"> <!-- Container -->
    <form class="form inner-container" method="post">
      <fieldset class="social-login-fs">
      </fieldset>
      <fieldset class="user-login-fs">
        <legend class="or-legend">Or</legend>
        <!-- e-mail -->
        <label for="email">E-mail</label>
        <input id="email" type="email" name="user_email" placeholder="name@livelio.com">
        <!-- password-->
        <label for="password">Password</label>
        <input id="password" type="password" name="user_password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;">
      </fieldset>
      <button class="btn action-btn login-btn" type="submit">Login</button>
      <!-- href for create password form -->
      <a href="create_password.php">Forgot your password?</a>
    </form>
    <!-- link to sign up form -->
    <button id="notMember" class="btn link-btn">Not a member yet?</button>
  </div>  <!-- Container end -->

  <!-- Scripts -->
  <script src="js/app.js"></script>
  <script src="js/links.js"></script>
</body>
</html>
