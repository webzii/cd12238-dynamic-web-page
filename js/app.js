var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');
var section3 = document.getElementById('section3');
var section4 = document.getElementById('section4');
var section5 = document.getElementById('section5');
var sections = [section1, section2, section3, section4, section5];
console.log(sections);
var section1NavBarLink = document.getElementById('l1');
var section2NavBarLink = document.getElementById('l2');
var section3NavBarLink = document.getElementById('l3');
var section4NavBarLink = document.getElementById('l4');
var section5NavBarLink = document.getElementById('l5');
section1NavBarLink.addEventListener('click', function(event) {
    event.preventDefault();
    section1.scrollIntoView(
        {
            behavior: 'smooth'
        }
    )
})
section2NavBarLink.addEventListener('click', function(event) {
    event.preventDefault();
    section2.scrollIntoView(
        {
            behavior: 'smooth'
        }
    )
})
section3NavBarLink.addEventListener('click', function(event) {
    event.preventDefault();
    section3.scrollIntoView(
        {
            behavior: 'smooth'
        }
    )
})
section4NavBarLink.addEventListener('click', function(event) {
    event.preventDefault();
    section4.scrollIntoView(
        {
            behavior: 'smooth'
        }
    )
})
section5NavBarLink.addEventListener('click', function(event) {
    event.preventDefault();
    section5.scrollIntoView(
        {
            behavior: 'smooth'
        }
    )
})