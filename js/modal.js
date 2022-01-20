
// PROCESS MODAL COMPONENTS
// ClICK OUTSIDE tO HIDE ALL INSTANCES OF DIALOG MODAL AND OVERLAY

$(document).click((element) => {
    if(element.target.dataset && element.target.dataset.modalTarget){
        applyDialogclass(element)
    }
    if(element.target.dataset && element.target.dataset.closeModal){
        closemModal(element.target.dataset.closeModal)
    }
    if(element.target.id === 'toggleMenu' || element.target.id === 'overlay'){
        toggleMenu()
    }
})

function applyDialogclass(element){
    const dialogId = element.target.dataset.modalTarget
    const targetHeight = element.target.clientHeight;
    const dialog = document.getElementById(dialogId);
    if(dialog.classList.contains('central-dialog-lg')
    || dialog.classList.contains('side-dialog')){
        dialog.style.display = 'block';
    } else if(dialog.classList.contains('dropdown-menu')){
        dialog.style.top = targetHeight + 20;
        console.log(';targetHeight:', targetHeight);
        dialog.style.display = 'block';
    }
    else{
        dialog.style.display = 'flex';
    }
    const overlay = document.createElement("div");
    dialog.appendChild(overlay);
    overlay.classList.add('dialog-overlay');
    overlay.style.zIndex = -1;
    dialog.style.zIndex = highestZIndex() + 1;
}

function closemModal(dialogId){
    const dialog = document.getElementById(dialogId);
    dialog.style.display = 'none';
    dialog.style.zIndex = 0;
}

function toggleMenu(){
    let menu = document.getElementById('sideMenu');
    menu.classList.toggle('toggle-open');
    let overlay = document.getElementById('overlay');
    overlay.classList.toggle('d-block');
  }
