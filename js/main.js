let button = document.querySelector('.footer-button__wrapper');
let footer = document.querySelector('.footer');
let body = document.querySelector('.body');
let stats = document.querySelector('.falcon-heavy__stats');


button.onclick = function() {
    stats.classList.toggle('show-image');
}