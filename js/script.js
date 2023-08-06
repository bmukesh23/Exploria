'use-strict';

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenEL = document.querySelectorAll('.hidden');
hiddenEL.forEach((el) => observer.observe(el));


const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('price-show');
        }
    });
});

const priceHiddenEL = document.querySelectorAll('.price-hidden');
priceHiddenEL.forEach((el) => priceObserver.observe(el));

const counters = document.querySelectorAll('.numbers');
const speed = 200;

counters.forEach(counter => {
    const animate = () => {
        const value = counter.getAttribute('data-counter');
        const data = +counter.innerText;
        const time = value / speed;

        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }
    }
    animate();
});