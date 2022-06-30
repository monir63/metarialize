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
    rightMenu.classList.toggle('active');
}