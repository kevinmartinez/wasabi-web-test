(function () {
  'use strict';
    /*
    Script for internal linking within the document
    */

    // get the elements from the dom
    var notMemberBtn = document.getElementById('notMember');
    var isMember = document.getElementById('isMember');

    // Created an if else to check if element exists on page or is null to avoid TypeError cannot set property 'onclick of null'
    if (isMember === null) {
      // assign a href when element is clicked
      notMemberBtn.onclick = function () {
        document.location.href = "sign_up.php";
      };
    } else {
      //For the ALREADY MEMBER button
      isMember.onclick = function () {
        document.location.href="index.php";
      };
    }
}());
