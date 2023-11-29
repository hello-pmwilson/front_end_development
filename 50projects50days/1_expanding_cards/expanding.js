document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded");
    const expandingCards = document.getElementsByClassName('expanding-card');
    console.log(expandingCards);
    for (var i = 0; i < expandingCards.length; i++) {
        console.log(i); console.log(expandingCards[i]);
        expandingCards[i].addEventListener('click', (event) => {
            console.log("click!");
            for (var i = 0; i < expandingCards.length; i++) {
                expandingCards[i].className = "expanding-card";
                console.log("Changes all?"); 
            }
            console.log(expandingCards);
            console.log(event);
            event.target.className = "expanding-card active";
            console.log(event); 
        });
    };
});