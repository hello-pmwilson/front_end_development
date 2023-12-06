const navigationOpen = document.getElementById("open-nav");
const navigationClose = document.getElementById("close-nav");

const navigation = document.querySelector(".nav");
const article = document.querySelector(".article");
const navList = document.querySelector(".nav-list");
const navListList = navList.children;

navigationOpen.addEventListener("click", () => {
    article.style.transform = 'rotate(-15deg)';
    navigation.style.transform = 'translate(-50%, -50%) rotate(-90deg)'
    for (var i=0; i < navListList.length; i++) {
        var offset = 150;
        navListList[i].style.transform = 'translate(' + offset + '%)';
        offset += 50;
        navListList[i].style.transitionDelay = '0.5s';
    }
})

navigationClose.addEventListener("click", () => {
    article.style.transform = '';
    navigation.style.transform = ''   
    for (var i=0; i < navListList.length; i++) {
        navListList[i].style.transform = '';
        navListList[i].style.transitionDelay = '0s';
    }
})

