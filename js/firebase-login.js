var ref = new Firebase("https://wasabi-test.firebaseio.com");


var login = document.getElementById('login');
var emailElement = document.getElementById('email');
var passElement = document.getElementById('password');


login.addEventListener('click', function(prev) {
  prev.preventDefault();// To prevent default link click action
  console.log('clicked');
  email = emailElement.value;// get user email value
  console.log(email);
  password = passElement.value;  // get user password value
  console.log(password);

ref.authWithPassword({
  email    : email,
  password : password
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    document.location.href="landing.html";
  }
});
});
