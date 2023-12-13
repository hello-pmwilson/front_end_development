//Stylistically I prefer the page switching when you reach halfway
//when using mouseover the div i feel like it takes forever
//whereas when I'm moving toward the right it feels more responsive
//I would switch to mouse over instead if there were more content

//Alternative, mouse over available at the bottom

const right = document.querySelector('.right');
const left = document.querySelector('.left');

//for implementing mouse over, start comment here
document.addEventListener('mousemove', trackMouse);
function trackMouse(event) {
    const mouseX = event.clientX;
    const screenWidth = window.innerWidth;
    console.log(mouseX);

    if (mouseX <= screenWidth / 2) {
        //mouse is on the left
        left.style.width = '75%';
        right.style.width = '25%';
    } else if (mouseX >= screenWidth / 2) {
        //mouse is on the right
        left.style.width = '25%';        
        right.style.width = '75%';
    } else {
        left.style.width = '50%';        
        right.style.width = '50%';
    }
    
}
//end comment here

document.addEventListener('mouseout', () => {
    left.style.width = '50%';        
    right.style.width = '50%';
})


//ALTERNATIVE USING MOUSE OVER DIV

// left.addEventListener('mouseover', () => {
//     //mouse is on the left
//     left.style.width = '75%';
//     right.style.width = '25%';
// })

// right.addEventListener('mouseover', () => {
//     left.style.width = '25%';        
//     right.style.width = '75%';
// })