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
        openUplodModal();
      });
  }
}

// to open file upload dialog box
function openUplodModal(){
  $('#triggerUpload').click(function () {
    const dialog = document.getElementById("uploadDialog");
    applyDialogclass(dialog, 'flex');
  });
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
          const dialog = document.getElementById("estateDropwonDialog");
          applyDialogclass(dialog, 'flex');
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
          const dialog = document.getElementById("addEstateDialog");
          applyDialogclass(dialog, 'flex');
        });
      });
  }
}

class ServiceTypeDropdown extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/service-type-dropdown.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        $('#addServiceType').click(function () {
          const dialog = document.getElementById("addServiceTypeDialog");
          applyDialogclass(dialog, 'flex');
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

class NewTenure extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-tenure.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}

class TenureDropdown extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/tenure-dropdown.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        $('#addTenure').click(function () {
          const dialog = document.getElementById("addTenureDialog");
          applyDialogclass(dialog, 'flex');
        });
      });
  }
}

class NewCategory extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-category.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
        openUplodModal();
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
        $('#selectServiceType').click(function () {
          const serviceType = document.getElementById("serviceTypeDropdown");
          applyDialogclass(serviceType, 'flex');
        });
        $('#selectTenure').click(function () {
          const tenure = document.getElementById("tenureDropdown");
          applyDialogclass(tenure, 'flex');
        });
        $('#selectServiceGroup').click(function () {
          const serviceGroup = document.getElementById("estateDropwonDialog");
          applyDialogclass(serviceGroup, 'flex');
        });
        $('#selectCategory').click(function () {
          const category = document.getElementById("categoryDropdown");
          applyDialogclass(category, 'flex');
        });
        $('#addCategory').click(function () {
          const addCategory = document.getElementById("addCategoryDialog");
          applyDialogclass(addCategory, 'flex');
        });
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
          const city = document.getElementById("cityDropdownDialog");
          applyDialogclass(city, 'flex');
        });
        $('#estateSuccessBtn').click(function () {
          const estate = document.getElementById("estateSuccessDialog");
          applyDialogclass(estate, 'flex');
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

class CategoryDropdown extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/category-dropdown.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}


class EstateSuccess extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-estate-success.html')
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
    applyDialogclass(resident, 'block');
  });
  $('#newUser').click(function () {
    removeAddPopup();
    const user = document.getElementById("addUserDialog");
    applyDialogclass(user, 'block');
  });
  $('#newFacility').click(function () {
    removeAddPopup();
    const facility = document.getElementById("addFacilityDialog");
    applyDialogclass(facility, 'block');
  });
  $('#newProperty').click(function () {
    removeAddPopup();
    const newProperty = document.getElementById("addPropertyDialog");
    applyDialogclass(newProperty, 'block');
  });
  $('#newService').click(function () {
    removeAddPopup();
    const addService = document.getElementById("addServiceDialog");
    applyDialogclass(addService, 'block');
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
customElements.define('add-estate-success-component', EstateSuccess);
customElements.define('new-tenure-component', NewTenure);
customElements.define('tenure-dropdown-component', TenureDropdown);
customElements.define('service-type-dropdown-component', ServiceTypeDropdown);
customElements.define('category-dropdown-component', CategoryDropdown);
customElements.define('new-category-component', NewCategory);


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
