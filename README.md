# spacio
spacio user management portal

# Modal Behavior
1. Ecah modal is stackable by default i.e remains on the page after another open opens.
    To make a modal close after a new one is triggerd, add data-modal-stackable to the modal(dialog) container
2. To trigger a modal from an element, add data-modal-target="modalId"
3. To close a modal from an element, add data-close-modal="modalId"

# Dropdown
1. To make a dropdown menu position around its parent, give the parent class 'positon-relative';
2. To make it start from top of the parent, use class 'stack-up' in the dropdown dialog container
3. To make it start from top of the parent, use class 'stack-down' in the dropdown dialog container.
    not adding a stack-up or stack-down defaults to stack down. Th menu will begin with some spaces after the parent element
