const email = document.getElementById('email');
const pass = document.getElementById('password');

const emailSpan = document.querySelectorAll('#email-span');
const passSpan = document.querySelectorAll('#password-span');

email.addEventListener('focus', ()=>{
    console.log("focus");
    var delay = 50;
    for (var i = 0; i < emailSpan.length; i++) {      
        emailSpan[i].className = 'translate';
        emailSpan[i].style.transition = `transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay}ms`; 
        delay += 50; 
    }
})

email.addEventListener('blur', ()=>{
    for (var i = 0; i < emailSpan.length; i++) {      
        emailSpan[i].classList.remove('translate');
}
})

pass.addEventListener('focus', ()=>{
    console.log("focus");
    var delay = 50;
    for (var i = 0; i < passSpan.length; i++) {      
        passSpan[i].className = 'translate';
        passSpan[i].style.transition = `transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay}ms`; 
        delay += 50; 
    }
})

pass.addEventListener('blur', ()=>{
    for (var i = 0; i < passSpan.length; i++) {      
        passSpan[i].classList.remove('translate');
}
})
