<!-- PHP testing -->
<?php
$title= "Create new password";
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
  <h1>Create new password</h1>
  <!-- Container -->
  <div class="container">
    <form class="form inner-container" method="post" action="">
      <fieldset class="get-pass-fs">
        <!-- legend included for accessibility but visually hidden -->
        <legend class="get-pass-legend">Get a new password</legend>
        <!-- New password instructions -->
        <p>
          Enter your email adress. You will recieve a link to create a new password via e-mail.
        </p>
        <!-- e-mail -->
        <label for="email">E-mail</label>
        <input id="email" type="email" name="user_email" placeholder="name@livelio.com" required>
      </fieldset>
      <!-- Button for getting password -->
      <button class="btn action-btn get-pass-btn" type="submit">Get a new password</button>
    </form>
  </div> <!-- Container end -->

  <!-- Scripts -->
  <script src="js/app.js"></script>
</body>
</html>
