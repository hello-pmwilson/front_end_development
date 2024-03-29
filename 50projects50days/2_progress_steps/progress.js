let activeCircle = 1

const circles = document.querySelectorAll('.circle');
const line = document.getElementById('progress');

const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', () => {
    activeCircle++;

    if(activeCircle > circles.length) {
        activeCircle = circles.length;
    }

    progress();
})

prev.addEventListener('click', () => {
    activeCircle--

    if (activeCircle < 1) {
        activeCircle=1;
    }
    progress()
}) 

function progress() {
    circles.forEach((circle, idx) => {
        if(idx < activeCircle) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    if(activeCircle === 1) {
        prev.disabled = true;
    } else if(activeCircle === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

    line.style.width = (activeCircle - 1)/(circles.length - 1) * 100 + '%'

}

progress();



