document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Hover Effect for Interactive Elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => cursor.classList.add('fade-in'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('fade-in'));
    });

    // Ripple Effect
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple-effect');
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 500);
    });

    // Firefly Generation
    const firefliesContainer = document.querySelector('.fireflies');
    const maxFireflies = 10;
    let fireflyCount = 0;

    function createFirefly() {
        if (fireflyCount >= maxFireflies) return;

        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        firefly.style.left = `${Math.random() * 100}vw`;
        firefly.style.animationDuration = `${Math.random() * 3 + 2}s`;
        firefliesContainer.appendChild(firefly);

        fireflyCount++;
        firefly.addEventListener('animationend', () => {
            firefly.remove();
            fireflyCount--;
        });
    }

    setInterval(createFirefly, 1500);
});
