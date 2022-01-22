
// PROCESS MODAL COMPONENTS
// ClICK OUTSIDE tO HIDE ALL INSTANCES OF DIALOG MODAL AND OVERLAY

$(document).click((element) => {
    closeModalOnClickOutside(element);
    if(element.target.dataset && element.target.dataset.modalTarget){
        applyDialogclass(element);
    }
    // implement selection of closest element with dstaset
    if(element.target.dataset && element.target.dataset.closeModal){
        closeModal(element.target.dataset.closeModal);
    }
    if(element.target.id === 'toggleMenu' || element.target.id === 'overlay'){
        toggleMenu();
    }
})

function applyDialogclass(element){
    const dialogId = element.target.dataset.modalTarget;
    const targetHeight = element.target.clientHeight;
    const dialog = document.getElementById(dialogId);
    if(dialog.classList.contains('central-dialog-lg')
    || dialog.classList.contains('side-dialog')){
        dialog.style.display = 'block';
    } else if(dialog.classList.contains('dropdown-menu')){
        dialog.style.display = 'block';
        if(dialog.classList.contains('stack-up')){
            dialog.classList.add('stack-up');
            dialog.style.top = targetHeight - 20; // to add spacing under the parent element
        } else {
            dialog.style.top = targetHeight + 20; // to add spacing under the parent element
        }
    }
    else{
        dialog.style.display = 'flex';
    }
    checkParentModalForClose(element);
    const overlay = document.createElement("div");
    dialog.appendChild(overlay);
    overlay.setAttribute('id', 'dialog-overlay');
    overlay.style.zIndex = -1;
    dialog.style.zIndex = highestZIndex() + 1;
    closeMenu();
}

// ClICK OUTSIDE tO HIDE DIALOG MODAL INSTANCE AND OVERLAY
function closeModalOnClickOutside(element) {
    if (
        element.target.id === 'dialog-overlay'
      ) {
        const dialogParent = element.target.closest('div.dialog') || element.target.closest('div.dropdown-menu');
        closeModal(dialogParent.id);
      }
}
function checkParentModalForClose(element) {
    const parentEl = element.target.closest('div.dialog');
    if(parentEl && parentEl.dataset.modalStackable && parentEl.dataset.modalStackable === 'false'){
        closeModal(parentEl.id)
    }
}

function closeModal(dialogId){
    const dialog = document.getElementById(dialogId);
    const backdrop = dialog.childNodes[dialog.childNodes.length - 1]; // to get the backdrop as last element in parent
    dialog.style.display = 'none';
    dialog.style.zIndex = 0;
    dialog.removeChild(backdrop) // to remove backdrop to avoid stacking more to it;
}

function closeMenu(){
    let menu = document.getElementById('sideMenu');
    menu.classList.remove('toggle-open');
    let overlay = document.getElementById('overlay');
    overlay.classList.remove('d-block');
}

function toggleMenu(){
    let menu = document.getElementById('sideMenu');
    menu.classList.toggle('toggle-open');
    let overlay = document.getElementById('overlay');
    overlay.classList.toggle('d-block');
}
