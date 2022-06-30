function leftMenuToggle(){
    const leftMenu = document.querySelector('#left_col');
    const left_menu = document.querySelector('.left_menu');
    const topMenu = document.querySelector('#right_full');
    const menuIcon = document.querySelector('.fa-bars');
    menuIcon.classList.toggle('active');
    topMenu.classList.toggle('col-md-10');
    leftMenu.classList.toggle('col-md-2')
    left_menu.classList.toggle('active');
}

function toggleRightInput(){
    const rightMenu = document.querySelector('.rightSideInput');
    const full_body_from_right = document.querySelector('.full_body_from_right');
    full_body_from_right.classList.toggle('active');
    rightMenu.classList.toggle('active');
}
function menuItemToggle(item){
    const menuItem = document.getElementById(item);
    menuItem.classList.toggle('active');
}
function removeActiveFunction(){
    menuItemToggle('fixedProfile')
    menuItemToggle('notification')
    toggleRightInput()
    leftMenuToggle()
}