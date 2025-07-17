// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-opacity-95', 'shadow-xl');
    } else {
        nav.classList.remove('bg-opacity-95', 'shadow-xl');
    }
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mouse move glow effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.body.style.background = `linear-gradient(120deg, #1e1e2f ${x * 100}%, #4a2c6b ${y * 100}%, #2a2a72)`;
});

// Mouse move circle effect for #about section
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.getElementById('about');
    const circle = document.createElement('div');
    circle.classList.add('hover-circle');
    aboutSection.appendChild(circle);

    aboutSection.addEventListener('mousemove', (e) => {
        const rect = aboutSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    });

    aboutSection.addEventListener('mouseleave', () => {
        circle.style.opacity = '0';
    });

    aboutSection.addEventListener('mouseenter', () => {
        circle.style.opacity = '1';
    });
});