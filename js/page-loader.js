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
          const upload = document.getElementById("uploadDialog");
          upload.style.display = "flex";
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
        $('#estateOptions').click(function () {
          const estateOptionsDialog = document.getElementById("estateDropwonDialog");
          estateOptionsDialog.style.display = "flex";
        });
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
        // dragDrop();
         // add button actions for modal here
      });
  }
}

class EstateDropdown extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/estate-dropdown.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        $('#addEstate').click(function () {
          const serviceType = document.getElementById("addEstateDialog");
          serviceType.style.display = "flex";
        });
      });
  }
}

class ServiceDropdown extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/service-dropdown.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        $('#addServiceType').click(function () {
          const serviceType = document.getElementById("addServiceTypeDialog");
          serviceType.style.display = "flex";
        });
      });
  }
}

class CityDropdown extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/city-dropdown.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}

class NewService extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-service.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}

class NewEstate extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-estate.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        $('#selectCity').click(function () {
          const serviceType = document.getElementById("cityDropdownDialog");
          serviceType.style.display = "flex";
        });
      });
  }
}


class NewServiceType extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-service-type.html')
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
customElements.define('estate-dropdown-component', EstateDropdown);
customElements.define('new-estate-component', NewEstate);
customElements.define('new-service-type-component', NewServiceType);
customElements.define('new-service-component', NewService);
customElements.define('city-dropdown-component', CityDropdown);


function dragDrop(){
  const dropArea = document.getElementById('drop-area')
  ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  })
  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  ;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
  })
  
  ;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
  })
  
  function highlight(e) {
    dropArea.classList.add('highlight')
  }
  
  function unhighlight(e) {
    dropArea.classList.remove('highlight')
  }
  

}
