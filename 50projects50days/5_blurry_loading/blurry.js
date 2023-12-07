const loadingText = document.querySelector('.loading');
const image = document.querySelector('.image');

var loading = null;

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

let loadingNum = 0;

var imageLoader = new Image();
imageURL = 'https://picsum.photos/2000'
imageLoader.src = imageURL;


imageLoader.onload = function() {
    image.style.background = `url(${imageURL}) no-repeat center center/cover`;
    loading = setInterval(load, 30);
}

function load() {
    console.log('enter function');
    loadingNum++
    console.log(`${loadingNum}`);

    if (loadingNum > 99) {
    clearInterval(loading)
    console.log('cleared')
    }

    loadingText.innerHTML = `${loadingNum}%`; 
    loadingText.style.opacity = scale(loadingNum, 0, 100, 1, 0); //scales the loading value 0-100 to an opacity value 0-1
    image.style.filter = `blur(${scale(loadingNum, 0, 100, 30, 0)}px)`;
}



