const wrapper = document.getElementById('wrapper');

var count = 0;

function addContent() {
    count ++;
    const content = document.createElement('div');
    const innerContent = document.createElement('h1');
    innerContent.innerHTML = 'Content';

    let side = whatSide(count);
    content.classList = `content off-screen-${side}`;
    content.appendChild(innerContent);
    wrapper.appendChild(content);
    setTimeout(function () {
        content.classList.add(`show-${side}`);
    }, 0); //wait for the block of code to finish        

}

function whatSide(count) {
    if (count % 2 === 0) {
        //even, come from the left
        return 'left';
    }
    else {
        //odd, come from the right
        return 'right';
    }
}
