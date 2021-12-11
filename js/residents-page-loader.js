'use strict';
class Menu extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the menu component and attach to current page
    fetch('../partials/menu.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        $('#addNewBtn').click(function () {
          const dialog = document.getElementById("adNewDialog");
          dialog.style.display = "block";
        });
      });
  }
}

class Calendar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the menu component and attach to current page
    fetch('../partials/calendar.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}
class Feeds extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the menu component and attach to current page
    fetch('../partials/feeds.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}

function loadModalActions(){

  $('#newResident').click(function () {
    removeAddPopup();
    const resident = document.getElementById("addResidntDialog");
    resident.style.display = "block";
  });
  $('#newUser').click(function () {
    removeAddPopup();
    const user = document.getElementById("addUserDialog");
    user.style.display = "block";
  });
  $('#newFacility').click(function () {
    removeAddPopup();
    const facility = document.getElementById("addFacilityDialog");
    facility.style.display = "block";
  });
  $('#newProperty').click(function () {
    removeAddPopup();
    const facility = document.getElementById("addPropertyDialog");
    facility.style.display = "block";
  });
  $('#newService').click(function () {
    removeAddPopup();
    const facility = document.getElementById("addServiceDialog");
    facility.style.display = "block";
  });
  
}

function removeAddPopup(){
  const dialog = document.getElementById("adNewDialog");
  dialog.style.display = "none";
}


customElements.define('navigation-component', Menu);
customElements.define('calendar-component', Calendar);
customElements.define('feeds-component', Feeds);



