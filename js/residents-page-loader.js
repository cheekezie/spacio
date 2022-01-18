'use strict';

function highestZIndex(){
  const maxZ = Math.max.apply(null, 
    $.map($('body *'), function(e,n) {
      if ($(e).css('position') != 'static')
        return parseInt($(e).css('z-index')) || 1;
  }));
  return maxZ;
}

function applyDialogclass(dialog, display){
  dialog.style.display = display;
  dialog.style.zIndex = highestZIndex() + 1;
}

$(document).ready(function () {
  $('#changePlanBtn').click(function () {
    const dialog = document.getElementById("changePlanDialog");
    applyDialogclass(dialog, 'block');
  });

  $('#makePaymentBtn').click(function () {
    const dialog = document.getElementById("orderSummaryDialog");
    applyDialogclass(dialog, 'block');
  });

})

$(document).ready(function () {
  $('#scheduleVisitorBtn').click(function () {
    const dialog = document.getElementById("scheduleVisitorDialog");
    applyDialogclass(dialog, 'block');
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
        $('#newOrder').click(function () {
          const dialog = document.getElementById("newOrderDialog");
          applyDialogclass(dialog, 'block');
        });
        $('#toggleMenu').click(function () {
          toggleMenu();
        });
        $('#overlay').click(function () {
          toggleMenu();
        })
      });
  }
}

function toggleMenu(){
  let menu = document.getElementById('sideMenu');
  menu.classList.toggle('toggle-open');
  let overlay = document.getElementById('overlay');
  overlay.classList.toggle('d-block');
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

class ScheduleVisitors extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the change plan modal
    fetch('../partials/schedule-visitors.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        openTagDropdown();
      });
  }
}

class NewOrder extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the change plan modal
    fetch('../partials/new-order.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        openCategoryDropdown();
        openTagDropdown();
      });
  }
}

class CategoryDropdown extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the change plan modal
    fetch('../partials/category-dropdown.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}


class TagDropdown extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the change plan modal
    fetch('../partials/tag-dropdown.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}

function openCategoryDropdown(){
  $('#openResidentCategory').click(function () {
    const dialog = document.getElementById("residentsCategoryDropdown");
    applyDialogclass(dialog, 'flex');
  });
}

function openTagDropdown(){
  $('#tagDropdownBtn').click(function () {
    const dialog = document.getElementById("tagDropdown");
    applyDialogclass(dialog, 'flex');
  });
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
customElements.define('schedule-visitors-component', ScheduleVisitors);
customElements.define('new-order-component', NewOrder);
customElements.define('resident-category-dropdown-component', CategoryDropdown);
customElements.define('tag-dropdown-component', TagDropdown);


