function slideToggleItem(id){
    $(`#${id}`).slideToggle();
}
function checkFullContent(){
    const leftMenu = document.getElementById('leftMenu');
    const content = document.getElementById('content');
    const image = document.getElementById('image');
    if(leftMenu.classList.contains('active') === true){
        content.className = 'col-md-10'
        image.className = 'img'
    }else{
        content.className = 'col-md-12'
        image.className = 'logo-sm'
    }
    
}
checkFullContent();
function leftMenuToggle(){
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.toggle('active');
    checkFullContent();
}

function addClient(){
    const client = document.getElementById('client_added');
    client.classList.toggle('active');
}

function toggleModal(){
    const modal = document.getElementById('modal');
    modal.classList.toggle('active');
}