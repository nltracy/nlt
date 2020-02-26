

//Menu cursor program, checks for a section intersecting the screen
//and moving the cursor appropriately
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right, #283E51, #4B79A1)",
    "linear-gradient(to left, #0052D4, #65C7F7, #9CECFB)",
    "linear-gradient(to right, #536976, #BBD2C5)",
    "#606d83"
];

//How much of the section needs to show? 70% at default
const options = {
    threshold: 0.7
};

//This checks for Intersections
let observer = new IntersectionObserver(navCheck, options);

// Place the observers on the sections in html
sections.forEach(section => {
    observer.observe(section);
});

// If set the current section on screen and make changes
function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        
        const gradientIndex = entry.target.getAttribute('data-index');
        
        const coords = activeAnchor.getBoundingClientRect();
        
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top - 17,
            left: coords.left
        };

        console.log(directions.left);


        if (entry.isIntersecting) {
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("height", `${directions.height}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.background = gradients[gradientIndex];
        }

    });
}

//Get current year and set the copyright message in the footer
document.getElementById('currYear').appendChild(document.createTextNode(new Date().getFullYear()));


const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.getElementById('navBar');

hamburgerBtn.addEventListener('click', () => {
    console.log('Button Clicked');
    navBar.classList.toggle('open');

});

