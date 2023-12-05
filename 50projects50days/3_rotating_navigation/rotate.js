const navigationOpen = document.getElementById("open-nav");
const navigationClose = document.getElementById("close-nav");

const navigation = document.querySelector(".nav");
const article = document.querySelector(".article");

navigationOpen.addEventListener("click", () => {
    article.style.transform = 'rotate(-15deg)';
    navigation.style.transform = 'translate(-50%, -50%) rotate(-90deg)'
})

navigationClose.addEventListener("click", () => {
    article.style.transform = '';
    navigation.style.transform = ''   
})

