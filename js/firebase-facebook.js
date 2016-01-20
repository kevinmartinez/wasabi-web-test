var ref = new Firebase("https://wasabi-test.firebaseio.com");

var fbBtn = document.getElementById('fbBtn');

fbBtn.addEventListener('click', function() {

  ref.authWithOAuthRedirect("facebook", function(error) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      // redirects on success but need to check up Oauth.
    }
  });
});
