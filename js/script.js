const getId = (link) =>  link.getAttribute('href').replace('#', '');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-list__item-link').forEach((link) => {
                link.classList.toggle(
                    'nav-list__item-link--active',
                    getId(link) === entry.target.id
                );
            });
        }
    });
}, {
    threshold: 0.7,
});

document.querySelectorAll('.section').forEach(
    (section) => observer.observe(section),
);

document.querySelector(".nav-list").addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-list__item-link')) {
        e.preventDefault();

        window.scrollTo({
            top: document.getElementById(getId(e.target)).offsetTop,
            behavior: 'smooth'
        });
    }
});