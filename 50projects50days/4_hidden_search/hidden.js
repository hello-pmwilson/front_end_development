const search = document.querySelector('.search-bar');
const icon = document.querySelector('.bi-search');

icon.addEventListener('click', () => {
    search.classList.toggle('active');
})

