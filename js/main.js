'use strict';
$(document).ready(function () {

  // acrion buttons routing
  $('#signin').click(function () {
    window.location.href = '/facility-maanagers/pages/dashboard-summary.html';
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
    window.location.href = '/facility-maanagers/pages/property-listings.html';
  });
  $('.noticeDetails').click(function () {
    window.location.href = '/facility-maanagers/pages/demand-notice-listings.html';
  });


  // ClICK OUTSIDE tO HIDE ALL INSTANCES OF DIALOG MODAL AND OVERLAY
  $(document).mouseup((e) => {
    const container = $('.dialog-content');
    const addNewBtn = $('#addNewBtn');
    const triggerDialog = $('.triggerDialog');
    // If the target of the click isn't the dialog container,
    // content and the button that triggers the dialog
    if (
      !container.is(e.target) &&
      !triggerDialog.is(e.target) &&
      !addNewBtn.is(e.target) &&
      container.has(e.target).length === 0
    ) {
      const dialog = getHighestElement();
      const dialogParent = dialog.closest('div.dialog');
      dialogParent.style.display = "none";
      // for (let index = 0; index < dialog.length; index++) {
      //   dialogParent.style.display = "none"; 
      // }
    }
  });
});

function getHighestElement() {
  // Return the element that matches selector having the largest z index
  return Array.from(document.querySelectorAll('.dialog')).reduce((a, b) => getZIndex(a) >= getZIndex(b) ? a : b);
}

function getZIndex(el) {
  // Return the z-index of el, or 0 if none is set.
  return parseInt(getCssProperty(el, "z-index")) || 0;
}

function getCssProperty(el, prop) {
  // Return the computed value of the css property prop for the element el
  return document.defaultView.getComputedStyle(el, null).getPropertyValue(prop);
}


function slideFeed(){
  let feed = document.getElementById('feedPanel');
  feed.classList.toggle('toggle-open');
}

function highestZIndex(){
  const maxZ = Math.max.apply(null, 
    $.map($('body *'), function(e,n) {
      if ($(e).css('position') != 'static')
        return parseInt($(e).css('z-index')) || 1;
  }));
  return maxZ;
}

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
