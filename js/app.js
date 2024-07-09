var navBar = document.getElementById(`list`);
navBar.innerHTML = `
    <li><a href="#section1" class="a" id="l1">Section 1</a></li>
    <li><a href="#section2" class="a" id="l2">Section 2</a></li>
    <li><a href="#section3" class="a" id="l3">Section 3</a></li>
    <li><a href="#section4" class="a" id="l4">Section 4</a></li>
    <li><a href="#section5" class="a" id="l5">Section 5</a></li>
    <li><a href="#commentsSection" class="a" id="l6">Comments</a></li>
`;
var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');
var section3 = document.getElementById('section3');
var section4 = document.getElementById('section4');
var section5 = document.getElementById('section5');
var section6 = document.getElementById('commentsSection')
var sections = [section1, section2, section3, section4, section5];
var section1NavBarLink = document.getElementById('l1');
var section2NavBarLink = document.getElementById('l2');
var section3NavBarLink = document.getElementById('l3');
var section4NavBarLink = document.getElementById('l4');
var section5NavBarLink = document.getElementById('l5');
var section6NavBarLink = document.getElementById('l6')
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
section6NavBarLink.addEventListener('click', function(event) {
    event.preventDefault();
    section6.scrollIntoView(
        {
            behavior: 'smooth'
        }
    )
})
function isNearTop(section) {
    var rect = section.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.2;
}
function isSectionActive(isNearTop) {
    return isNearTop;
}
function toggleSectionClass(section, isSectionActive) {
    if(isSectionActive) {
        section.classList.add(`activeSection`);
    } else {
        section.classList.remove(`activeSection`);
    }
}
document.addEventListener(`scroll`, function() {
    var _sections = this.querySelectorAll(`section`);
    _sections.forEach(function(section) {
        var nearTop = isNearTop(section);
        var isActive = isSectionActive(nearTop);
        toggleSectionClass(section, isActive);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('commentsForm');
    const commentsDiv = document.querySelector('.commentsDiv');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('nameInput').value;
        const emailInput = document.getElementById('emailInput').value;
        const commentInput = document.getElementById('commentInput').value;
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('_comment');
        const commentP = document.createElement('p');
      commentP.classList.add('commentP');
      commentP.textContent = commentInput;
  
      const commenterName = document.createElement('p');
      commenterName.classList.add('commenterName');
      commenterName.innerHTML = `<b>${nameInput}</b>`;
  
      const commenterEmail = document.createElement('p');
      commenterEmail.classList.add('commenterEmail');
      commenterEmail.textContent = emailInput;
  
      // Append new comment elements to the commentDiv
      commentDiv.appendChild(commentP);
      commentDiv.appendChild(commenterName);
      commentDiv.appendChild(commenterEmail);
  
      // Append the new commentDiv to the commentsDiv
      commentsDiv.appendChild(commentDiv);
  
      // Reset the form
      form.reset();
    });
  });
  