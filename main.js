const btn = document.getElementById('btn');
const mainMenu = document.getElementById('main-menu');

btn.addEventListener('click', function(){
    mainMenu.classList.toggle('show');
});