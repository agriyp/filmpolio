let cards = document.querySelectorAll('.card-item');
let cardPopup = document.querySelector('#card-popup');
let close = document.querySelector('.close');
let navUl = document.querySelector('nav ul');
let menuMobile = document.querySelector('.menu-mobile');
let body = document.querySelector('body');
cards.forEach(card => {
    card.addEventListener('click', ()=>{
        cardPopup.classList.remove('hide')
        body.style.overflow = 'hidden';
    });
});
close.addEventListener('click', ()=>{
    cardPopup.classList.add('hide')
    body.style.overflow = 'auto';
});
menuMobile.addEventListener('click', ()=>navUl.classList.toggle('show'));