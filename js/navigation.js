'use-strict';

const nav_header = document.querySelector(".header");
const nav_section = document.querySelector(".navbar");

const navObserver = new IntersectionObserver((entries) => {
    const ent = entries[0];
    ent.isIntersecting == false ? nav_section.classList.add('nav_sticky') : navbar_section.classList.remove('nav_sticky');
},
    {
        threshold: 0.1,
    }
);

navObserver.observe(nav_header);