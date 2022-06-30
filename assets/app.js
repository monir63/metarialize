function leftMenuToggle(ind){
    const leftMenu = document.querySelector('#left_col');
    const left_menu = document.querySelector('.left_menu');
    const topMenu = document.querySelector('#right_full');
    const menuIcon = document.querySelector('.fa-bars');
    if(ind === false){
        menuIcon.classList.remove('active');
        topMenu.classList.remove('col-md-10');
        leftMenu.classList.remove('col-md-2')
        left_menu.classList.remove('active');
    }else{
        menuIcon.classList.toggle('active');
    topMenu.classList.toggle('col-md-10');
    leftMenu.classList.toggle('col-md-2')
    left_menu.classList.toggle('active');
    }
}

function toggleRightInput(ind){
    const rightMenu = document.querySelector('.rightSideInput');
    const full_body_from_right = document.querySelector('.full_body_from_right');
    if(ind === false){
        full_body_from_right.classList.remove('active');
        rightMenu.classList.remove('active');
    }else{
        full_body_from_right.classList.toggle('active');
    rightMenu.classList.toggle('active');
    }
}
function menuItemToggle(item,ind){
    const menuItem = document.getElementById(item);
    if(ind===false){
        menuItem.classList.remove('active');
    }else{
        menuItem.classList.toggle('active');
    }
}
function removeActiveFunction(){
    menuItemToggle('fixedProfile',false)
    menuItemToggle('notification',false)
    toggleRightInput(false)
    leftMenuToggle(false)
}