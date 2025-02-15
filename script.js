document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive'); // Add more selectors as needed

    interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('fade-in'); // Add fade-in class
        });

        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('fade-in'); // Remove fade-in class
        });
    });

    // Add ripple effect on click
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.classList.add('ripple-effect');
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);

        // Remove the ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 500); // Match the duration of the ripple animation
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const firefliesContainer = document.querySelector('.fireflies');
    const maxFireflies = 20; // Maximum number of fireflies allowed on the screen
    let fireflyCount = 0; // Counter to track the number of fireflies

    // Function to create a firefly
    function createFirefly() {
        if (fireflyCount >= maxFireflies) {
            return; // Stop creating new fireflies if the limit is reached
        }

        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        firefly.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        firefly.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random speed
        firefliesContainer.appendChild(firefly);

        fireflyCount++; // Increment the firefly counter

        // Remove firefly after animation ends
        firefly.addEventListener('animationend', () => {
            firefly.remove();
            fireflyCount--; // Decrement the firefly counter
        });
    }

    // Create fireflies at regular intervals
    setInterval(createFirefly, 1000); // Adjust interval for more/less fireflies
});