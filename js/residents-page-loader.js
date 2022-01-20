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

class HouseMenu extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the menu component and attach to current page
    fetch('../partials/house-menu.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
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

class PaymentSuccess extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the menu component and attach to current page
    fetch('../partials/payment-success.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
}
class OrderDetails extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // To get the menu component and attach to current page
    fetch('../partials/order-details.html')
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.innerHTML = data;
      });
  }
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
customElements.define('order-details-component', OrderDetails);
customElements.define('payment-success-component', PaymentSuccess);
customElements.define('house-menu-component', HouseMenu);


//write fubction to close modal by taking modal id as argument

