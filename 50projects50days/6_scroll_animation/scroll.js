//TO DO: 
//Make the scroll less clunky by adding in logic to preload in the next content,
//then set it so you show the next when you scroll so you can scroll smoother

const wrapper = document.getElementById('wrapper');
const startWith = 3;
var count = 0;
console.log('inner height' + window.innerHeight);
console.log('body offset' + document.body.offsetHeight);


//on load, animate in the starting amount
for (var i=0; i<startWith; i++) {
    addContent();
}

var referenceElement = document.querySelectorAll('.content')[count-1];
var referenceTop = referenceElement.offsetTop;
var referenceBottom = referenceTop + referenceElement.offsetHeight;
console.log(referenceBottom);
window.addEventListener('scroll', () => {

    var referenceElement = document.querySelectorAll('.content')[count-1];
    var referenceTop = referenceElement.offsetTop;
    var referenceBottom = referenceTop + referenceElement.offsetHeight;

    let scroll = window.scrollY;
    currentPosition = window.innerHeight + scroll;

    if (currentPosition >= referenceBottom + 220) {
        addContent();
        console.log(currentPosition - referenceBottom);
    }

    if (currentPosition < referenceBottom) {
        removeContent(count-1);
    }

})

function addContent() {
    count++
    let currentCount = count
    const content = document.createElement('div');
    const innerContent = document.createElement('h1');
    innerContent.innerHTML = 'Content'; 
    content.appendChild(innerContent); 

    let side = whatSide(currentCount);
    content.classList = `content off-screen-${side}`;
    
    wrapper.appendChild(content);
    setTimeout(function () {
        content.classList.add(`show-${side}`);
    }, 0); //wait for the block of code to finish        


}

function whatSide(current) {
    if (current % 2 === 0) {
        //even, come from the left
        return 'left';
    }
    else {
        //odd, come from the right
        return 'right';
    }
}

function removeContent(idx) {
    const allContent = document.querySelectorAll('.content');
    let side = whatSide(idx+1); 
    allContent[idx].classList.remove(`show-${side}`);
    count-- 
    setTimeout(function () {
        wrapper.removeChild(allContent[idx]);

    }, 500); //wait for the block of code to finish
}

