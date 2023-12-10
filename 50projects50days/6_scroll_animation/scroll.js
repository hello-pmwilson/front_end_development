const wrapper = document.getElementById('wrapper');
const startWith = 3;
var idx = 0;

//on load, animate in the starting amount
for (var i=0; i<startWith; i++) {
    addContent();
}

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    desiredCount = Math.floor(scroll/200);
    currentCount = count-startWith;
    if (desiredCount > currentCount) {
        dif = desiredCount - currentCount;
        for (var i = 0; i < dif; i++) {
            addContent();
        }
    }
    if (desiredCount < currentCount) {
        dif = currentCount - desiredCount;
        for (var i = 0; i < dif; i++) {
            removeContent();
        }
    }


})

function addContent(idx) {
    idx++

    const content = document.createElement('div');
    const innerContent = document.createElement('h1');
    innerContent.innerHTML = 'Content'; 
    content.appendChild(innerContent); 

    let side = whatSide(idx);
    content.classList = `content off-screen-${side}`;
    
    wrapper.appendChild(content);
    setTimeout(function () {
        content.classList.add(`show-${side}`);
    }, 0); //wait for the block of code to finish        


}

function whatSide(idx) {
    if (idx % 2 === 0) {
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
    let side = whatSide();
    idx--    
    allContent[idx].classList.remove(`show-${side}`);
    setTimeout(function () {
        wrapper.removeChild(allContent[idx]);
    }, 500); //wait for the block of code to finish
}

