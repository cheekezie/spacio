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
      });
  }
}
class NewWorkOrder extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/new-work-order.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}

class WorkOrderStatus extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/order-status.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}

class NewTask extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-task.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
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
      });
  }
}

class ServiceActions extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/service-actions.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
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

class NewDemandNotice extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/add-demand-notice.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}
class DemandNoticeDetail extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/demand-notice-detail.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}

class DemandNoticeStatus extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the popup component and attach to current page
    fetch('../partials/demand-notice-status.html')
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
customElements.define('new-work-order-component', NewWorkOrder);
customElements.define('order-status-component', WorkOrderStatus);
customElements.define('add-task-component', NewTask);
customElements.define('new-demand-notice-component', NewDemandNotice);
customElements.define('demand-notice-detail-component', DemandNoticeDetail);
customElements.define('demand-notice-status-component', DemandNoticeStatus);
customElements.define('service-actions-component', ServiceActions);


function dragDrop(){
  const dropArea = document.getElementById('drop-area');
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
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
