var ref = new Firebase("https://wasabi-test.firebaseio.com");


var resetPass = document.getElementById('resetPass');
var emailElement = document.getElementById('email');


resetPass.addEventListener('click', function(prev) {
  prev.preventDefault();// To prevent default link click action
  console.log('clicked');
  email = emailElement.value;// get user email value
  console.log(email);

  ref.resetPassword({
    email: email
  }, function(error) {
    if (error) {
      switch (error.code) {
        case "INVALID_USER":
          console.log("The specified user account does not exist.");
          break;
        default:
          console.log("Error resetting password:", error);
      }
    } else {
      console.log("Password reset email sent successfully!");
    }
  });






});
