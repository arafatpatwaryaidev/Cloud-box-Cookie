let open = document.querySelector('#open');
let close = document.querySelector('#close');
let box = document.querySelector('.box');

open.addEventListener('click', () => {
    box.style.display = 'block'
});

close.addEventListener('click', () => {
    box.style.display = 'none'
});