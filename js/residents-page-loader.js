'use strict';


$(document).ready(function () {
  $('#changePlanBtn').click(function () {
    const dialog = document.getElementById("changePlanDialog");
    dialog.style.display = "block";
  });

  $('#makePaymentBtn').click(function () {
    const dialog = document.getElementById("orderSummaryDialog");
    dialog.style.display = "block";
  });

})

function closeModal(dialogId){
  const dialog = document.getElementById(dialogId);
    dialog.style.display = "none";
}
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
        $('#toggleMenu').click(function () {
          let menu = document.getElementById('sideMenu');
          menu.classList.toggle('toggle-open');
          let overlay = document.getElementById('overlay');
          overlay.classList.toggle('d-block');
        });
        $('#overlay').click(function () {
          let menu = document.getElementById('sideMenu');
          menu.classList.toggle('toggle-open');
          let overlay = document.getElementById('overlay');
          overlay.classList.toggle('d-block');
        })
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

class ChangePlan extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the change plan modal
    fetch('../partials/change-plan.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}
class OrderSummary extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the change plan modal
    fetch('../partials/order-summary.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}

class PaymentCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the menu component and attach to current page
    fetch('../partials/payment-card.html')
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
customElements.define('payment-card-component', PaymentCard);
customElements.define('change-plan-component', ChangePlan);
customElements.define('order-summary-component', OrderSummary);



