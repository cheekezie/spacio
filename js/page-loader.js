'use strict';

// To get the menu component and attach to current page
fetch("../partials/menu.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
      document.querySelector("menu").innerHTML = data;
        // const template = document.getElementById('summary');
        // const page = document.getElementById('outlet');
        // page.appendChild(
        //   document.importNode(template.content, true)
        // );
  });
