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
          const dialog = document.getElementById("myDialog");
          dialog.style.display = "block";
        });
      });
  }
}
class AddPopup extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-popup.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}

customElements.define('new-item-popup-component', AddPopup);
customElements.define('navigation-component', Menu);
