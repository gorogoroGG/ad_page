document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // FAQ Accordion
    const triggers = document.querySelectorAll('.accordion-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.parentElement;

            // Toggle current
            item.classList.toggle('active');

            // Optional: Close others
            document.querySelectorAll('.accordion-item').forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
        });
    });

    // Mobile Menu (Simple toggle)
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // In a real implementation this would toggle a class on the nav
            console.log('Menu toggled');
        });
    }
});
