const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('navBar');

hamburgerBtn.addEventListener('click', () => {
    console.log('Button Clicked');
    navBar.classList.toggle('open');

});