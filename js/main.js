'use strict';
$(document).ready(function () {

  $('#signin').click(function () {
    window.location.href = '/pages/dashboard-summary.html';
  });
  $('#business').click(function () {
    window.location.href = '/onboarding/success.html';
  });
  $('#personal').click(function () {
    window.location.href = '/onboarding/otp.html';
  });
  $('#otpBtn').click(function () {
    window.location.href = '/onboarding/finish.html';
  });
  $('#finish').click(function () {
    window.location.href = '/onboarding/signin.html';
  });
  $('#onboardManagers').click(function () {
    window.location.href = '/onboarding/managers-business.html';
  });
  $('#onboardResidents').click(function () {
    window.location.href = '/onboarding/managers-signup.html';
  });
  $('#success').click(function () {
    window.location.href = '/onboarding/otp.html';
  });
  $('.propertyDetail').click(function () {
    window.location.href = '/pages/property-listings.html';
  });
  $('.noticeDetails').click(function () {
    window.location.href = '/pages/demand-notice-listings.html';
  });


  // ClICK OUTSIDE tO HIDE ALL INSTANCES OF DIALOG MODAL AND OVERLAY
  $(document).mouseup((e) => {
    const container = $('.dialog-content');
    const addNewBtn = $('#addNewBtn');
    // If the target of the click isn't the dialog container and content
    if (
      !container.is(e.target) &&
      !addNewBtn.is(e.target) &&
      container.has(e.target).length === 0
    ) {
      const dialog = document.getElementsByClassName("dialog");
      for (let index = 0; index < dialog.length; index++) {
        dialog[index].style.display = "none"; 
      }
    }
  });
});

// var input = document.querySelector("#telephone");
// window.intlTelInput(input, {
//     allowDropdown:true,
//     autoHideDialCode:true,
//     excludeCountries: [],
//     formatOnDisplay:true,
//     initialCountry:"",
//     onlyCountries: ["us","gb" ],
//     separateDialCode:true,
//     preferredCountries: ["us","gb" ],
//     utilsScript: "/js/intlTell-utils.js",
// });

// $("#telephone").intlTelInput({
//     allowDropdown:true,
//     autoHideDialCode:true,
//     excludeCountries: [],
//     formatOnDisplay:true,
//     initialCountry:"",
//     onlyCountries: ["us","gb" ],
//     separateDialCode:true,
//     preferredCountries: ["us","gb" ],
//     utilsScript: "/js/intlTell-utils.js",
// });
