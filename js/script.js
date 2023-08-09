'use-strict';
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenEL = document.querySelectorAll('.hidden');
hiddenEL.forEach((el) => observer.observe(el));


const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('price-show');
        }
    });
});

const priceHiddenEL = document.querySelectorAll('.price-hidden');
priceHiddenEL.forEach((el) => priceObserver.observe(el));