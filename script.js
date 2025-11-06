document.addEventListener('DOMContentLoaded', () => {
    /** ✨ Custom Cursor **/
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Hover glow on links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('fade-in');
            el.style.textShadow = '0 0 10px gold, 0 0 20px rgba(255, 215, 0, 0.6)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('fade-in');
            el.style.textShadow = 'none';
        });
    });

    /** 💥 Ripple Effect **/
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple-effect');
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        // Cursor pulse
        cursor.style.transform = 'translate(-50%, -50%) scale(1.4)';
        setTimeout(() => cursor.style.transform = 'translate(-50%, -50%) scale(1)', 150);
    });

    /** 🌌 Fireflies - Gilded Stardust **/
    const firefliesContainer = document.querySelector('.fireflies');
    if (!firefliesContainer) {
        console.warn('No .fireflies container found in HTML!');
        return;
    }

    const maxFireflies = 20;
    let fireflyCount = 0;

    function createFirefly() {
        if (fireflyCount >= maxFireflies) return;

        const firefly = document.createElement('div');
        firefly.classList.add('firefly');

        // Random starting position
        firefly.style.left = `${Math.random() * 100}vw`;
        firefly.style.top = `${Math.random() * 100}vh`;

        // Random glow + movement
        const duration = Math.random() * 10 + 5; // 5s to 15s
        firefly.style.animation = `drift ${duration}s ease-in-out infinite alternate`;
        firefly.style.opacity = Math.random() * 0.8 + 0.2;

        // Random golden hue variation
        const hue = 45 + Math.random() * 15;
        firefly.style.backgroundColor = `hsl(${hue}, 100%, 60%)`;
        firefly.style.boxShadow = `0 0 10px hsl(${hue}, 100%, 70%), 0 0 20px hsl(${hue}, 100%, 50%)`;

        firefliesContainer.appendChild(firefly);
        fireflyCount++;

        // Remove eventually if desired
        setTimeout(() => {
            firefly.remove();
            fireflyCount--;
        }, duration * 1000 * 2);
    }

    // Continuously spawn
    setInterval(() => {
        if (Math.random() < 0.9) createFirefly();
    }, 800);

    /** 🌠 Logo Pulse **/
    const logo = document.querySelector('.logo-glow');
    if (logo) {
        setInterval(() => {
            logo.style.filter = 'drop-shadow(0 0 15px gold) drop-shadow(0 0 30px rgba(255,215,0,0.8))';
            setTimeout(() => logo.style.filter = 'drop-shadow(0 0 5px gold)', 700);
        }, 3000);
    }
});
