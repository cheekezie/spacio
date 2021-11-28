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
class AddPopup extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-items.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        loadModalActions();
      });
  }
}

class NewResident extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-resident.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        $('#triggerUpload').click(function () {
          const facility = document.getElementById("uploadDialog");
          facility.style.display = "flex";
        });
      });
  }
}
class NewUser extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-user.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        // add button actions for modal here
      });
  }
}

class NewFacility extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-facility.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
         // add button actions for modal here
      });
  }
}

class NewProperty extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-property.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
         // add button actions for modal here
      });
  }
}

class UploadDialog extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/upload-file.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
         // add button actions for modal here
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
}

function removeAddPopup(){
  const dialog = document.getElementById("adNewDialog");
  dialog.style.display = "none";
}

customElements.define('new-item-popup-component', AddPopup);
customElements.define('navigation-component', Menu);
customElements.define('new-resident-component', NewResident);
customElements.define('new-user-component', NewUser);
customElements.define('new-facility-component', NewFacility);
customElements.define('new-property-component', NewProperty);
customElements.define('upload-component', UploadDialog);
