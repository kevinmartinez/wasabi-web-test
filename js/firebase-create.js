var ref = new Firebase("https://wasabi-test.firebaseio.com");

/* Getting DOM elements
1. the signup button
2. the user email
3. the user password */
var signUp = document.getElementById('regBtn');
var emailElement = document.getElementById('email');
var passElement = document.getElementById('password');


signUp.addEventListener('click', function(prev) {
  prev.preventDefault();// To prevent default link click action
  console.log('clicked');
  email = emailElement.value;// get user email value
  console.log(email);
  password = passElement.value;  // get user password value
  console.log(password);

// Firebase
  ref.createUser({
    email: email,
    password: password
  }, function(error, userData) {

        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
      }
  });
  return false;
});


ref.authWithPassword({
  email    : email,
  password : password
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});




//
//
// signUp.onclick = function () {
//   console.log('clicked');
//   email = emailElement.value;
//   console.log(email);
//   password = passElement.value;
//
//
//   ref.createUser({
//     email: email,
//     password: password
//   }, function(error, userData) {
//     if (error) {
//       switch (error.code) {
//         case "EMAIL_TAKEN":
//           console.log("The new user account cannot be created because the email is already in use.");
//           break;
//         case "INVALID_EMAIL":
//           console.log("The specified email is not a valid email.");
//           break;
//         default:
//           console.log("Error creating user:", error);
//       }
//     } else {
//       console.log("Successfully created user account with uid:", userData.uid);
//     }
//   });
//
// };












// (function () {
//   var ref = new Firebase("https://wasabi-test.firebaseio.com/");
//
//   var regBtn = document.getElementById('regBtn');
//   console.log(regBtn);
//
//   var emailElement = document.getElementById('email');
//   console.log(emailElement);
//
//   var passwordElement = document.getElementById('password');
//   console.log(passwordElement);
//
// regBtn.addEventListener('click', function () {
//
//   email = emailElement.value.innerHTML;
//   console.log(email);
//   password = passwordElement.value.innerHTML;
//   console.log(password);
//
//
//
//
//   console.log('clicked');
//
//
//
//
//   ref.createUser({
//     email    : email,
//     password : password
//   }, function(error, userData) {
//     if (error) {
//       console.log("Error creating user:", error);
//     } else {
//       console.log("Successfully created user account with uid:", userData.uid);
//     }
//   });
//
// });




// //Handling Signup process
//   $("#signup-btn").on('click', function() {
//
//       var email = $("#email").val();
//       var password = $("#password").val();
//       firebaseref.createUser({
//           email: email,
//           password: password
//       },
//
//       function(error, userData) {
//           if (error) {
//               console.log("Error creating user:", error);
//               $("#signup-btn").parents("#register").find('.status').html("Error creating user:" + error).show();
//           } else {
//               console.log("Successfully created user account with uid:", userData.uid);
//               $("#signup-btn").parents("#register").find('.status').html("Successfully created user account with uid:" + userData.uid).show();
//               firebaseref.authWithPassword({
//                   email: email,
//                   password: password,
//               },signupLoginCallback);
//
//           }
//       });
//   });
// }());
